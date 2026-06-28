import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/shared/Header";

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
      <body className="min-h-full w-full flex flex-col pt-6 items-center justify-start">
        <Header />
        {children}
      </body>
    </html>
  );
}
