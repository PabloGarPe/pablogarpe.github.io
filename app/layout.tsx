import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My developer portfolio",
  description: "This is my developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${firaCode.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
