import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "gen-search-widget": HTMLAttributes<HTMLElement> & {
        configId?: string;
        triggerId?: string;
        "config-id"?: string;
        "trigger-id"?: string;
        authToken?: string;
      };
    }
  }
}

export {};
