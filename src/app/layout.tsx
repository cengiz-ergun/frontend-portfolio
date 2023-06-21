import { Analytics } from "@vercel/analytics/react"
import "./sass/globals.scss"

import { PaginationCountProvider } from "./context/PaginationCount"
import { PaginationSelectionProvider } from "./context/PaginationSelection"
import { PopupSelectionProvider } from "./context/PopupSelection"
import { PopupStateProvider } from "./context/PopupState"
import { UploadStateProvider } from "./context/UploadState/UploadStateContext"
import { ScreenWidthDetectionProvider } from "./context/ScreenWidthDetection"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ScreenWidthDetectionProvider>
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
                </ScreenWidthDetectionProvider>
                <Analytics />
            </body>
        </html>
    )
}
