import fs from 'fs';
import path from 'path';

const requiredEnvVars = [
    'NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN',
    'NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN'
];

// Combine process.env and any variables found in .env files
const envCache = { ...process.env };

const envFiles = ['.env', '.env.local', '.env.production'];
for (const file of envFiles) {
    try {
        const content = fs.readFileSync(path.resolve(process.cwd(), file), 'utf8');
        content.split('\n').forEach(line => {
            const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
            if (match) {
                const key = match[1];
                let value = match[2] || '';
                value = value.replace(/^['"]|['"]$/g, '');
                envCache[key] = value;
            }
        });
    } catch (e) {
        // Ignore missing files
    }
}

let hasError = false;

for (const envVar of requiredEnvVars) {
    if (!envCache[envVar]) {
        console.error(`\n[ERROR] Missing required environment variable: ${envVar}`);
        hasError = true;
    }
}

if (hasError) {
    console.error(`\nMissing NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN or NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN.`);
    console.error(`Create .env.production on the Linode server before building.\n`);
    process.exit(1);
}

console.log("[INFO] Shopify environment variables validated successfully.");
