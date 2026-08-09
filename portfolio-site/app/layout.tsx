import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivangi Maurya | Data Analyst",
  description:
    "Shivangi Maurya — Data Analyst and BCA student skilled in Python, SQL, Power BI, Excel, Pandas, and MySQL.",
  keywords: [
    "Shivangi Maurya",
    "Data Analyst",
    "BCA Student",
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Pandas",
    "MySQL",
    "Data Analysis",
  ],
  authors: [{ name: "Shivangi Maurya" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}