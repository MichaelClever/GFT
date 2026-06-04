'use client';

import Script from 'next/script';
import { useRef, useEffect } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'gen-search-widget': any;
        }
    }
}

export function ChatInput() {
    const widgetRef = useRef<any>(null);

    // TODO: Future Backend Security Auth Implementation
    // useEffect(() => {
    //     async function fetchToken() {
    //         try {
    //             const response = await fetch('YOUR_NODE_ENDPOINT_ON_LINODE');
    //             const data = await response.json();
    //             if (widgetRef.current) {
    //                 widgetRef.current.authToken = data.token;
    //             }
    //         } catch (error) {
    //             console.error("Failed to fetch Google Auth Token", error);
    //         }
    //     }
    //     fetchToken();
    // }, []);

    return (
        <section className="w-full max-w-[900px] mx-auto px-4 z-10 relative mb-16 pt-8 flex justify-center">
            {/* Google Cloud AI Gen App Builder Script */}
            <Script 
                src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US" 
                strategy="lazyOnload" 
            />

            {/* Hidden Widget Element */}
            <gen-search-widget 
                ref={widgetRef}
                configId="8679db35-833c-44d7-80ca-68ba87a3a72c" 
                triggerId="searchWidgetTrigger"
            ></gen-search-widget>

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
