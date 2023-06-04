import React from "react";
import './globals.css'
import {Montserrat} from 'next/font/google'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

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
        <div className="container">
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    )
}
