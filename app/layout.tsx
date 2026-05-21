import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meeting Cost Calculator | Remote Team Timezone Tool",
  description: "Calculate the financial and productivity cost of scheduling meetings across different timezones. Find optimal meeting times for your remote team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="15185ebe-572f-4ff2-8c94-bd794b6d8822"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
