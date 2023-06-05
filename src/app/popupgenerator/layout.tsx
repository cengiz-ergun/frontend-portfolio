"use client"

import "./sass/globals.scss"

import { Metadata } from "next"
import { PaginationCountProvider } from "./context/PaginationCount"
import { PaginationSelectionProvider } from "./context/PaginationSelection"
import { PopupSelectionProvider } from "./context/PopupSelection"

// export const metadata: Metadata = {
//     title: "Popup Generator",
//     description: "Powered by Popup Generator",
// }

export default function PopUpGeneratorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <PaginationCountProvider>
                <PaginationSelectionProvider>
                    <PopupSelectionProvider>
                        <section>{children}</section>
                    </PopupSelectionProvider>
                </PaginationSelectionProvider>
            </PaginationCountProvider>
        </>
    )
}
