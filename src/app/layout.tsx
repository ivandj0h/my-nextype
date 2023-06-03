import './globals.css'
import {Montserrat} from 'next/font/google'
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: process.env.NEXT_PUBLIC_METADATA_TITLE || 'My NexType App',
    description: process.env.NEXT_PUBLIC_METADATA_DESCRIPTION || 'NextJS with TypeScript and TailwindCSS',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={montserrat.className}>
        <body>
            <Navbar/>
                {children}
            <Footer/>
        </body>
        </html>
    )
}
