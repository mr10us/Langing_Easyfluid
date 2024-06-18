import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./utils";

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
  title: "EasyFluid",
  description:
    "EasyFluid is a web based service for monitoring your metalworking fluids, oils etc.",
  viewport: "width=device-width, initial-scale=1 user-scalable=no",
  robots: "noindex, nofollow",
  icons: {
    icon: "/favicon.png",
    shortcut: ["/favicon-16x16.png", "/favicon-32x32.png"],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body className={cn(heebo.variable, inter.variable, heebo.className)}>
        {children}
      </body>
    </html>
  );
}
