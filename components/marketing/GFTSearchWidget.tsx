"use client";

import { useEffect, useState } from "react";

export function GFTSearchWidget() {
    const [error, setError] = useState(false);

    // Dynamically load the Google script on mount
    useEffect(() => {
        const scriptId = 'google-search-widget-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Fetch and refresh the authentication token
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const loadToken = async () => {
            try {
                const res = await fetch('/api/search-token');
                if (!res.ok) throw new Error('Failed to fetch search token');
                
                const data = await res.json();
                
                // Inject the token into the widget DOM element
                const searchWidget = document.querySelector("gen-search-widget") as
                    | (HTMLElement & { authToken?: string })
                    | null;

                if (searchWidget && data.token) {
                    searchWidget.authToken = data.token;
                }
                
                // Calculate time until next refresh
                let refreshMs = 45 * 60 * 1000; // default 45 minutes
                if (data.expiresAt) {
                    const timeUntilExpiry = data.expiresAt - Date.now();
                    // Refresh 5 mins before expiry, or retry in 1 minute if it's already expired
                    refreshMs = Math.max(timeUntilExpiry - (5 * 60 * 1000), 60 * 1000); 
                }
                
                setError(false);
                timeoutId = setTimeout(loadToken, refreshMs);
                
            } catch (e) {
                console.error("Search token fetch failed.");
                setError(true);
                // On failure, retry in 5 minutes
                timeoutId = setTimeout(loadToken, 5 * 60 * 1000);
            }
        };

        loadToken();

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="w-full max-w-[900px] mx-auto px-4 z-10 relative mb-16 pt-8 flex justify-center">
            {/* The Invisible Search Widget */}
            <gen-search-widget 
                configId="8679db35-833c-44d7-80ca-68ba87a3a72c" 
                triggerId="searchWidgetTrigger">
            </gen-search-widget>

            <div className="w-full max-w-[600px] min-w-[300px]">
                {/* Visual Trigger Area */}
                <div className="bg-gradient-to-r from-[#8c6a1d] via-[#d4af37] to-[#8c6a1d] p-[3px] rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
                    <div 
                        id="searchWidgetTrigger" 
                        className="bg-[#2a1b12] rounded-full pl-4 pr-3 py-3 flex items-center gap-4 cursor-pointer hover:bg-[#322015] transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a2d48] to-[#0a1526] border-2 border-[#d4af37] flex items-center justify-center shrink-0 shadow-inner text-xl">
                            💬
                        </div>
                        
                        <div className="flex-1 flex flex-col">
                            <span className="text-[#8c6a1d] italic text-lg font-lora select-none">
                                Ask us any question...
                            </span>
                            {error && (
                                <span className="text-red-400/80 text-xs font-sans absolute bottom-[-20px] left-8">
                                    Search assistant is temporarily unavailable.
                                </span>
                            )}
                        </div>

                        <button className="bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] hover:brightness-110 text-[#2a1b12] px-8 py-3 rounded-full font-bold shadow-md border border-[#d4af37] transition-all whitespace-nowrap drop-shadow-md tracking-wider pointer-events-none select-none">
                            Chat
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
