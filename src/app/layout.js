import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
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
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
