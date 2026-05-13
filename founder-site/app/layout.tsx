import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lisa — Founder & Innovator",
  description: "Young founder building an ecosystem of products. Building in public, solving daily problems, imagining alternative worlds.",
  openGraph: {
    title: "Lisa — Founder & Innovator",
    description: "Building useful products in public. Current projects: Aruna, Coming of Age, Playlist AI, Chew Cycle, True Clarity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisa — Founder & Innovator",
    description: "Building useful products in public.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
