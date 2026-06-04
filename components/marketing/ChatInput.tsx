'use client';

import Script from 'next/script';
import { useRef, useEffect } from 'react';



export function ChatInput() {
    const widgetRef = useRef<any>(null);

    useEffect(() => {
        const searchWidget = document.querySelector('gen-search-widget') as any;
        if (searchWidget) {
            // 1. Inject the token while the widget is completely idle
            searchWidget.authToken = process.env.NEXT_PUBLIC_TEMPORARY_GCP_TOKEN;
            
            // 2. Now wake it up by setting the configuration ID
            searchWidget.configId = "8679db35-833c-44d7-80ca-68ba87a3a72c";
            console.log("Widget authenticated and lazily activated.");
        }
    }, []);

    const GenSearchWidget = 'gen-search-widget' as any;

    return (
        <section className="w-full max-w-[900px] mx-auto px-4 z-10 relative mb-16 pt-8 flex justify-center">
            {/* Google Cloud AI Gen App Builder Script */}
            <Script 
                src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US" 
                strategy="lazyOnload" 
            />

            {/* Hidden Widget Element */}
            <GenSearchWidget 
                ref={widgetRef}
                triggerId="searchWidgetTrigger"
            ></GenSearchWidget>

            {/* Chat Box */}
            <div className="w-full max-w-[600px] min-w-[300px]">
                <div className="bg-gradient-to-r from-[#8c6a1d] via-[#d4af37] to-[#8c6a1d] p-[3px] rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
                    <div className="bg-[#2a1b12] rounded-full pl-4 pr-3 py-3 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a2d48] to-[#0a1526] border-2 border-[#d4af37] flex items-center justify-center shrink-0 shadow-inner text-xl">
                            💬
                        </div>
                        <input 
                            id="searchWidgetTrigger"
                            type="text" 
                            placeholder="Ask any question..." 
                            className="bg-transparent border-none outline-none text-[#f1e5d1] text-lg font-lora flex-1 placeholder:text-[#8c6a1d] placeholder:italic w-full min-w-0"
                            data-gramm="false"
                            data-gramm_editor="false"
                            data-enable-grammarly="false"
                            suppressHydrationWarning
                        />
                        <button 
                            onClick={() => document.getElementById('searchWidgetTrigger')?.click()}
                            className="bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] hover:brightness-110 text-[#2a1b12] px-8 py-3 rounded-full font-bold shadow-md border border-[#d4af37] transition-all whitespace-nowrap drop-shadow-md tracking-wider"
                        >
                            Chat
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
