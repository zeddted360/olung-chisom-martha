import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Olung Chisom Martha | Registered Nurse",
  description:
    "Welcome to the portfolio of Olung Chisom Martha, a dedicated and compassionate registered nurse specializing in patient care and healthcare services.",
  keywords: [
    "Registered Nurse",
    "Healthcare Professional",
    "Nurse Portfolio",
    "Patient Care",
    "Healthcare Services",
    "Olung Chisom Martha",
  ],
  authors: [
    { name: "Olung Chisom Martha", url: "https://sommy-smart-care.vercel.app" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
