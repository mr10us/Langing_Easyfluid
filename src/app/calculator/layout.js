// user-scalable=no

import { Heebo, Inter } from "next/font/google";
import { cn } from "./../utils";
import { ZohoAnalytics } from "../components/ZohoAnalytics";
import { GoogleAnalytics } from "../components/GoogleAnalytics";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--heebo-font",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--inter-font",
});

export const metadata = {
  // metadataBase: new URL("https://easyfluid.com"),
  title: "EasyFluid",
  description:
    "EasyFluid is a web based service for monitoring your metalworking fluids, oils etc.",
  icons: {
    icon: "/favicon.png",
    shortcut: ["/favicon-16x16.png", "/favicon-32x32.png"],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "EasyFluid",
    description:
      "EasyFluid is a web based service for monitoring your metalworking fluids, oils etc.",
    url: "https://easyfluid.com",
    siteName: "EasyFluid",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "EasyFluid",
    description:
      "EasyFluid is a web based service for monitoring your metalworking fluids, oils etc.",
    card: "summary",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: "no",
};

export default function CalculatorLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "unset" }}>
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="google-site-verification" content="8p4ZG_haqWhMpyOJ-_GxPvShSvv8UuVZcVIKeiwzAQE" />
      <ZohoAnalytics />
      <GoogleAnalytics />
      <body className={cn(heebo.variable, inter.variable, heebo.className)}>
        {children}
      </body>
    </html>
  );
}
