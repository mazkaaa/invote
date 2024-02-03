import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Invote",
  description: "invoice and quotation application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="business" lang="en">
      <body
        className={
          poppins.className +
          " flex h-screen w-screen flex-col items-center justify-center"
        }
      >
        {children}
      </body>
    </html>
  );
}
