import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

export const metadata: Metadata = {
  title: "TRISHUL — AI-Powered Criminal Network Analysis System (PS189)",
  description: "TRISHUL: Secure Criminal Intelligence Command Console — SIH 2026 Functional Prototype. Synthetic demonstration data for authorized investigation workflow.",
  icons: {
    icon: "/trishul-logo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#0B0716] text-gray-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
