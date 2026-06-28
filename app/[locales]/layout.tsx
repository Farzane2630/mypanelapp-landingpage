import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Panel App",
  description: "No-code SAAS to build online booking platform in seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased w-full flex flex-col justify-center items-start"
    >
      <body>{children}</body>
    </html>
  );
}
