import { Analytics } from "@vercel/analytics/react"
import "./sass/globals.scss"

import { PaginationCountProvider } from "./context/PaginationCount"
import { PaginationSelectionProvider } from "./context/PaginationSelection"
import { PopupSelectionProvider } from "./context/PopupSelection"
import { PopupStateProvider } from "./context/PopupState"
import { UploadStateProvider } from "./context/UploadState/UploadStateContext"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <PaginationCountProvider>
                    <PaginationSelectionProvider>
                        <PopupSelectionProvider>
                            <PopupStateProvider>
                                <UploadStateProvider>
                                    <section>{children}</section>
                                </UploadStateProvider>
                            </PopupStateProvider>
                        </PopupSelectionProvider>
                    </PaginationSelectionProvider>
                </PaginationCountProvider>

                <Analytics />
            </body>
        </html>
    )
}
{
    /* <Script
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
                </Script> */
}
