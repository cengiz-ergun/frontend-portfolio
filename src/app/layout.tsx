import { Analytics } from "@vercel/analytics/react"

import Script from "next/script"
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
                {/* <Script
                    type="text/javascript"
                    src="/popups/securitycode/script.js"
                    strategy="beforeInteractive"
                />
                <Script>
                    {`
                        window.start.init({
                            size: "small",
                            position: "bottom-left",
                            color: "red",
                            contents: {
                                content1: "Security Code",
                                content2: "This code expires in 24 hours",
                                content3: "Code",
                                content4: "Cancel",
                                content5: "Continue"
                            }})
                      `}
                </Script> */}
            </body>
        </html>
    )
}
