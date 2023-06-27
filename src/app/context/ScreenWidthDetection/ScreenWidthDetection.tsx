'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { MOBILE_AND_TABLET_MAX_WIDTH_FOR_PAGINATION } from "../../constants/Constants"

// Create the context with a default value of false
const ScreenWidthDetectionContext = createContext(false)

// Provider component
export function ScreenWidthDetectionProvider({
    children,
}: {
    children: ReactNode
}) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Event handler for window resize
        const handleResize = () => {
            if (window.innerWidth < MOBILE_AND_TABLET_MAX_WIDTH_FOR_PAGINATION) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
      
        handleResize() // Call the handler once before the initial render
        window.addEventListener("resize", handleResize) // Add event listener for resize
      
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []) // Empty dependency array ensures the effect is only run once on component mount
    
    // Provide the value of isMobile to the children components through the context
    return (
        <ScreenWidthDetectionContext.Provider value={isMobile}>
            {children}
        </ScreenWidthDetectionContext.Provider>
    )
}

// Custom hook to consume the screen width detection value from the context
export function useScreenWidthDetection(): boolean {
    return useContext(ScreenWidthDetectionContext)
}
