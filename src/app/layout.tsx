import React from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: process.env.NEXT_PUBLIC_METADATA_TITLE || "ivandjohn.com",
  description:
    process.env.NEXT_PUBLIC_METADATA_DESCRIPTION || "ivandjoh Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container flex-grow custom-scrollbar">{children}</div>
        <Footer className="bg-gray-200 py-4 px-6 fixed bottom-0 w-full flex justify-between border-t border-gray-200 h-24 p-2" />
      </body>
    </html>
  );
}
