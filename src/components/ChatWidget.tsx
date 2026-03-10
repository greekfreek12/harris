"use client";

import Script from "next/script";

export default function ChatWidget() {
  return (
    <Script
      id="ghl-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69b01d9db372da70810d8090"
      strategy="afterInteractive"
    />
  );
}
