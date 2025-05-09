import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RemindBook",
  description: "RemindBook is a personal reading manager that helps you keep track of your current and future book readings. Easily organize your reading list and never forget what book you're reading next. Stay on top of your literary journey with RemindBook!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="szZxOPeXp1axD0lPMgS2IMm5th92_EdkEGhBJWkaSpw" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics /> {/* Add this line to enable analytics */}
      </body>
    </html>
  );
}
