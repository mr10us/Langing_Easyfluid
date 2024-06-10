import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./utils";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--heebo-font"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--inter-font"
});

export const metadata = {
  title: "EasyFluid",
  description: "EasyFluid is a web based service for monitoring your metalworking fluids, oils etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body className={cn(heebo.variable, inter.variable, heebo.className)}>{children}</body>
    </html>
  );
}
