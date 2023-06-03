import './globals.css'
import {Montserrat} from 'next/font/google'
import React from "react";

const roboto = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'My  NexType',
  description: 'NextJS with TypeScript and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={roboto.className}>
      <body>{children}</body>
      </html>
  )
}
