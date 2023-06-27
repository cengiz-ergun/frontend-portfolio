'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { MOBILE_AND_TABLET_MAX_WIDTH_FOR_PAGINATION } from "../../constants/Constants"

const ScreenWidthDetectionContext = createContext(false)

export function ScreenWidthDetectionProvider({
    children,
}: {
    children: ReactNode
}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_AND_TABLET_MAX_WIDTH_FOR_PAGINATION)
    const handleResize = () => {
        if (window.innerWidth < MOBILE_AND_TABLET_MAX_WIDTH_FOR_PAGINATION) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (
        <ScreenWidthDetectionContext.Provider value={isMobile}>
            {children}
        </ScreenWidthDetectionContext.Provider>
    )
}

export function useScreenWidthDetection(): boolean {
    return useContext(ScreenWidthDetectionContext)
}

