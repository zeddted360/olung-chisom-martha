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

  openGraph: {
    title: "Olung Chisom Martha | Registered Nurse",
    description:
      "Explore the work and expertise of Olung Chisom Martha, a registered nurse committed to providing excellent healthcare services.",
    url: "https://www.example.com",
    siteName: "https://olung-chisom-martha.vercel.app",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olung Chisom Martha | Registered Nurse",
    description:
      "Discover the journey and achievements of Olung Chisom Martha, a registered nurse focused on improving patient lives.",
    images: ["https://www.example.com/twitter-image.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
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
