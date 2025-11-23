import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
export const metadata: Metadata = {
  title: 'Fetti CRM',
  description: 'Fetti CRM SaaS portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
