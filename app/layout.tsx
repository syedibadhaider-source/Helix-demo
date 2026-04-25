import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const rocGrotesk = localFont({
  src: "../public/fonts/95844bad620d641ae275f5757f5b932d.woff2",
  variable: "--font-heading",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helix | Fire | Security | Compliance",
  description: "Helix delivers fire, security, and compliance solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable} ${rocGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
