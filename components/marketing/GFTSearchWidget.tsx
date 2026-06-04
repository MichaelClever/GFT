"use client";

import { useEffect, useState } from "react";

function injectGFTDeepDarkTheme(root: ShadowRoot | Document | Element | null) {
  if (!root || !('querySelector' in root)) return;
  if (root.querySelector("#gft-deep-dark-theme-v2")) return;

  const style = document.createElement("style");
  style.id = "gft-deep-dark-theme-v2";
  style.textContent = `
    :host {
      color-scheme: dark !important;

      --gm3-sys-color-background: #070502 !important;
      --gm3-sys-color-surface: #070502 !important;
      --gm3-sys-color-surface-container: #0b0703 !important;
      --gm3-sys-color-surface-container-low: #070502 !important;
      --gm3-sys-color-surface-container-lowest: #070502 !important;
      --gm3-sys-color-surface-container-high: #160e07 !important;
      --gm3-sys-color-surface-container-highest: #1f140a !important;
      --gm3-sys-color-on-surface: #f8f1dc !important;
      --gm3-sys-color-on-surface-variant: #e6d6ad !important;

      --md-sys-color-background: #070502 !important;
      --md-sys-color-surface: #070502 !important;
      --md-sys-color-surface-bright: #120b05 !important;
      --md-sys-color-surface-container: #0b0703 !important;
      --md-sys-color-surface-container-low: #070502 !important;
      --md-sys-color-surface-container-lowest: #070502 !important;
      --md-sys-color-surface-container-high: #160e07 !important;
      --md-sys-color-surface-container-highest: #1f140a !important;
      --md-sys-color-surface-variant: #1f140a !important;
      --md-sys-color-on-surface: #f8f1dc !important;
      --md-sys-color-on-surface-variant: #e6d6ad !important;
      --md-sys-color-primary: #d8a847 !important;
      --md-sys-color-secondary: #d8a847 !important;

      --ucs-color-global-container: #070502 !important;
      --ucs-color-preview-session-bg: #070502 !important;
      --card-content-card: #120b05 !important;
      --color-menu-background: #120b05 !important;

      background: #070502 !important;
      color: #f8f1dc !important;
    }

    :host,
    :host > *,
    [role="dialog"],
    .content,
    .inner-dialog,
    .inner-dialog > *,
    .search-bar-container,
    .results,
    .result,
    .results-container,
    .result-container,
    .answer,
    .answer-container,
    .summary,
    .summary-container,
    .main,
    .main-content,
    .body,
    .page,
    .surface,
    .container,
    ucs-results,
    ucs-search-bar,
    ucs-search-toolbar,
    ucs-answer,
    ucs-summary,
    ucs-result,
    ucs-result-card,
    ucs-answer-card,
    ucs-search-result,
    md-list,
    md-list-item,
    md-card,
    md-dialog,
    md-menu {
      background: #070502 !important;
      background-color: #070502 !important;
      color: #f8f1dc !important;
      border-color: rgba(216, 168, 71, 0.25) !important;
    }

    .content,
    .white-background .content,
    .white-background ucs-search-bar,
    ucs-search-bar {
      background: #070502 !important;
      background-color: #070502 !important;
    }

    input,
    textarea,
    [contenteditable="true"] {
      background: #1a1108 !important;
      background-color: #1a1108 !important;
      color: #f8f1dc !important;
      caret-color: #f8d36a !important;
      border-color: rgba(216, 168, 71, 0.5) !important;
    }

    p, span, div, section, article, main, li, h1, h2, h3, h4, h5, h6,
    button, md-icon, md-icon-button, md-filled-button, md-outlined-button, md-text-button {
      color: #f8f1dc !important;
    }

    a, a *, .link, .citation, .source {
      color: #f8d36a !important;
    }
  `;

  root.appendChild(style);
}

function walkAndInject(node: Document | ShadowRoot | Element = document) {
  const seen = new Set<Node>();

  function walk(current: Document | ShadowRoot | Element | null) {
    if (!current || seen.has(current)) return;
    seen.add(current);

    if ("shadowRoot" in current && current.shadowRoot) {
      injectGFTDeepDarkTheme(current.shadowRoot);
      walk(current.shadowRoot);
    }

    if ("querySelectorAll" in current) {
      current.querySelectorAll("*").forEach((el) => {
        if (el.shadowRoot) {
          injectGFTDeepDarkTheme(el.shadowRoot);
          walk(el.shadowRoot);
        }
      });
    }
  }

  walk(node);
}

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

                    walkAndInject();

                    if (searchWidget.shadowRoot) {
                        const observer = new MutationObserver(() => {
                            walkAndInject(searchWidget.shadowRoot!);
                        });

                        observer.observe(searchWidget.shadowRoot, {
                            childList: true,
                            subtree: true,
                            attributes: true,
                        });

                        setTimeout(() => walkAndInject(searchWidget.shadowRoot!), 500);
                        setTimeout(() => walkAndInject(searchWidget.shadowRoot!), 1500);
                        setTimeout(() => walkAndInject(searchWidget.shadowRoot!), 3000);
                        setTimeout(() => walkAndInject(searchWidget.shadowRoot!), 5000);
                    }
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
