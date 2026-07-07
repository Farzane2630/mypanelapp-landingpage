import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://mypanelapp.ir"),
  title: {
    default: "MyPanelApp",
    template: "%s | MyPanelApp",
  },
  description:
    "Create and manage your online booking platform in minutes with MyPanelApp.",
};
const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.className}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
