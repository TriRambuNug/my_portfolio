import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Website portfolio saya dengan Next.js dan TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}