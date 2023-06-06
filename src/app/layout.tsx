import { Analytics } from "@vercel/analytics/react"

import Head from "next/head"
import "./globals.css"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Cengiz's Portfolio",
    description: "Cengiz Ergün",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>
                {/* <link
                    rel="stylesheet"
                    href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
                /> */}
            </Head>
            <body className={inter.className}>
                {children}
                <Analytics />
                {/* <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script> */}
            </body>
        </html>
    )
}
