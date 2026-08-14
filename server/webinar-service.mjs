import http from 'node:http';
import nodemailer from 'nodemailer';

const PORT = process.env.PORT || 3001;
const HOST = '127.0.0.1';

// Rate limiting in-memory store: IP -> { count, timestamp }
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up stale rate limit entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
        if (now - data.timestamp > RATE_LIMIT_WINDOW_MS) {
            rateLimitMap.delete(ip);
        }
    }
}, 5 * 60 * 1000);

function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function isValidEmail(email) {
    if (!email || typeof email !== 'string' || email.length > 254) return false;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(email.trim());
}

function checkRateLimit(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || (now - entry.timestamp > RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return true;
    }
    if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }
    entry.count += 1;
    return true;
}

const server = http.createServer(async (req, res) => {
    // Helper response functions
    const sendJson = (statusCode, payload) => {
        res.writeHead(statusCode, {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        });
        res.end(JSON.stringify(payload));
    };

    // Route check: POST /api/webinar-register
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (req.method !== 'POST' || url.pathname !== '/api/webinar-register') {
        return sendJson(404, { success: false, message: 'Endpoint not found.' });
    }

    // Extract real client IP behind Nginx proxy
    const rawIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || '127.0.0.1';
    const clientIp = (typeof rawIp === 'string' ? rawIp.split(',')[0] : rawIp).trim();

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
        return sendJson(429, { success: false, message: 'Too many registration requests. Please try again later.' });
    }

    // Parse request body
    let bodyRaw = '';
    req.on('data', chunk => {
        bodyRaw += chunk;
        if (bodyRaw.length > 1e5) { // 100KB payload limit
            req.destroy();
        }
    });

    req.on('end', async () => {
        try {
            let body = {};
            try {
                body = JSON.parse(bodyRaw);
            } catch {
                return sendJson(400, { success: false, message: 'Invalid request format.' });
            }

            // Honeypot check (website/company field)
            if (body.website || body.company || body.hp) {
                // Silently pretend success to fool automated bots
                return sendJson(200, { success: true, message: 'Registration received.' });
            }

            const { name, email, date, time, timezone } = body;

            // Validate inputs
            if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
                return sendJson(400, { success: false, message: 'Please provide a valid name.' });
            }
            if (!isValidEmail(email)) {
                return sendJson(400, { success: false, message: 'Please provide a valid email address.' });
            }
            if (!date || typeof date !== 'string' || date.trim().length === 0 || date.length > 50) {
                return sendJson(400, { success: false, message: 'Please select a webinar date.' });
            }
            if (!time || typeof time !== 'string' || time.trim().length === 0 || time.length > 100) {
                return sendJson(400, { success: false, message: 'Please select a webinar time.' });
            }
            if (!timezone || typeof timezone !== 'string' || timezone.trim().length === 0 || timezone.length > 100) {
                return sendJson(400, { success: false, message: 'Please select a timezone.' });
            }

            const cleanEmail = email.trim();
            const safeName = escapeHtml(name.trim());
            const safeDate = escapeHtml(date.trim());
            const safeTime = escapeHtml(time.trim());
            const safeTimezone = escapeHtml(timezone.trim());
            const safeIp = escapeHtml(clientIp);

            // Check SMTP password environment variable
            const smtpPassword = process.env.SMTP_PASSWORD;
            if (!smtpPassword) {
                console.error('[Webinar Service Error] SMTP_PASSWORD environment variable is not configured.');
                return sendJson(500, { success: false, message: 'Server configuration error. Please contact site support.' });
            }

            // Create Nodemailer SMTP transporter
            const transporter = nodemailer.createTransport({
                host: 'mail.gamesforthinkers.org',
                port: 587,
                secure: false, // STARTTLS
                requireTLS: true,
                auth: {
                    user: 'info@gamesforthinkers.org',
                    pass: smtpPassword
                },
                tls: {
                    rejectUnauthorized: true
                }
            });

            // 1. Teacher Confirmation Email
            const teacherMailOptions = {
                from: 'Games For Thinkers <info@gamesforthinkers.org>',
                to: cleanEmail,
                replyTo: 'info@gamesforthinkers.org',
                subject: 'Webinar Registration Confirmation - Games For Thinkers',
                text: `Thank you, ${name.trim()}!\n\nYour registration for the Online EQUATIONS and Math Science Quest webinar has been successfully submitted.\n\nWebinar Details:\nDate: ${date.trim()}\nTime: ${time.trim()}\nTimezone: ${timezone.trim()}\n\nWe will be in touch with you at ${cleanEmail} shortly.\n\nGames For Thinkers\nAccelerated Learning Foundation\n1-800-456-1776`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a0f0a; background-color: #ffffff; border: 2px solid #d4af37; border-radius: 8px;">
                        <h2 style="font-family: Georgia, serif; color: #8c6a1d; border-bottom: 2px solid #d4af37; padding-bottom: 12px; margin-top: 0;">Registration Complete</h2>
                        <p style="font-size: 16px; line-height: 1.6;">Thank you, <strong>${safeName}</strong>! Your registration for the <strong>Online EQUATIONS and Math Science Quest</strong> webinar has been successfully submitted.</p>
                        <div style="background-color: #fdf5d3; border: 1px solid #d4af37; padding: 18px; border-radius: 6px; margin: 24px 0;">
                            <h3 style="margin-top: 0; color: #3a1d10; font-family: Georgia, serif;">Your Webinar Reservation</h3>
                            <p style="margin: 8px 0; font-size: 15px;"><strong>Date:</strong> ${safeDate}</p>
                            <p style="margin: 8px 0; font-size: 15px;"><strong>Time:</strong> ${safeTime}</p>
                            <p style="margin: 8px 0; font-size: 15px;"><strong>Timezone:</strong> ${safeTimezone}</p>
                        </div>
                        <p style="font-size: 15px; color: #4a3b32;">We will be in touch with you at <strong>${escapeHtml(cleanEmail)}</strong> shortly.</p>
                        <hr style="border: none; border-top: 1px solid #e0d0b0; margin: 28px 0 16px 0;" />
                        <p style="font-size: 12px; color: #7a6a5d; text-align: center; margin: 0;">Games For Thinkers &bull; Accelerated Learning Foundation &bull; 1-800-456-1776</p>
                    </div>
                `
            };

            // 2. Internal Registration Notification Email
            const internalMailOptions = {
                from: 'Games For Thinkers Website <info@gamesforthinkers.org>',
                to: 'info@gamesforthinkers.org',
                replyTo: `${name.trim()} <${cleanEmail}>`,
                subject: `New Webinar Registration: ${name.trim()}`,
                text: `New Teacher Webinar Registration\n\nTeacher Name: ${name.trim()}\nEmail Address: ${cleanEmail}\nWebinar Date: ${date.trim()}\nWebinar Time: ${time.trim()}\nTimezone: ${timezone.trim()}\nSubmission Timestamp: ${new Date().toISOString()}\nIP Address: ${clientIp}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a0f0a; background-color: #ffffff; border: 2px solid #8c6a1d; border-radius: 8px;">
                        <h2 style="font-family: Georgia, serif; color: #8c6a1d; border-bottom: 2px solid #8c6a1d; padding-bottom: 12px; margin-top: 0;">New Teacher Webinar Registration</h2>
                        <p style="font-size: 15px;">A new teacher has registered for the live demonstration:</p>
                        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
                            <tr style="background-color: #fcf8ee;"><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold; width: 35%;">Teacher Name:</td><td style="padding: 10px; border: 1px solid #e0d0b0;">${safeName}</td></tr>
                            <tr><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold;">Email Address:</td><td style="padding: 10px; border: 1px solid #e0d0b0;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #8c6a1d;">${escapeHtml(cleanEmail)}</a></td></tr>
                            <tr style="background-color: #fcf8ee;"><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold;">Webinar Date:</td><td style="padding: 10px; border: 1px solid #e0d0b0;">${safeDate}</td></tr>
                            <tr><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold;">Webinar Time:</td><td style="padding: 10px; border: 1px solid #e0d0b0;">${safeTime}</td></tr>
                            <tr style="background-color: #fcf8ee;"><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold;">Timezone:</td><td style="padding: 10px; border: 1px solid #e0d0b0;">${safeTimezone}</td></tr>
                            <tr><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold;">Submission Time:</td><td style="padding: 10px; border: 1px solid #e0d0b0;">${new Date().toISOString()}</td></tr>
                            <tr style="background-color: #fcf8ee;"><td style="padding: 10px; border: 1px solid #e0d0b0; font-weight: bold;">IP Address:</td><td style="padding: 10px; border: 1px solid #e0d0b0;">${safeIp}</td></tr>
                        </table>
                    </div>
                `
            };

            // Send both emails in parallel via SMTP
            await Promise.all([
                transporter.sendMail(teacherMailOptions),
                transporter.sendMail(internalMailOptions)
            ]);

            return sendJson(200, { success: true, message: 'Registration submitted successfully.' });

        } catch (err) {
            console.error('[Webinar Service Error]', err && err.message ? err.message : err);
            return sendJson(500, { success: false, message: 'An error occurred while processing your registration. Please try again.' });
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Webinar registration service listening on http://${HOST}:${PORT}`);
});
