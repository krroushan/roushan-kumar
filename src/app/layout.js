import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ROUSHAN KUMAR | Developer Portfolio",
  description: "ROUSHAN KUMAR's space-themed developer portfolio showcasing projects and skills",
  keywords: ["developer", "portfolio", "web development", "programming", "frontend", "backend", "ROUSHAN KUMAR"],
  openGraph: {
    title: "ROUSHAN KUMAR | Developer Portfolio",
    description: "ROUSHAN KUMAR's space-themed developer portfolio showcasing projects and skills",
    url: "https://your-portfolio-url.com",
    siteName: "ROUSHAN KUMAR - Developer Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
