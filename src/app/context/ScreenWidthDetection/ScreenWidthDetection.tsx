'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"

const ScreenWidthDetectionContext = createContext(false)

export function ScreenWidthDetectionProvider({
    children,
}: {
    children: ReactNode
}) {
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("useEffect is running")
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

