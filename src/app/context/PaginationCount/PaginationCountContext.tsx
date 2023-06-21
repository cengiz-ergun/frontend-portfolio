"use client"

import { ReactNode, createContext, useContext } from "react"
import Popups from "@root/public/popup-generator/data.json"

import { ITEM_PER_PAGINATION, ITEM_PER_PAGINATION_MOBILE } from "@popUpGeneratorConstants/Constants.js"
import { useScreenWidthDetection } from "../ScreenWidthDetection/ScreenWidthDetection"

const PaginationCountContext = createContext(0)

export function PaginationCountProvider({ children }: { children: ReactNode }) {
    const isMobile =  useScreenWidthDetection()
    const itemPerPagination = isMobile ? ITEM_PER_PAGINATION_MOBILE : ITEM_PER_PAGINATION
    const arrayLength = Popups.length
    const paginationCount: number =
        arrayLength % itemPerPagination == 0
            ? arrayLength / itemPerPagination
            : Math.floor(arrayLength / itemPerPagination) + 1
    return (
        <PaginationCountContext.Provider value={paginationCount}>
            {children}
        </PaginationCountContext.Provider>
    )
}

export function usePaginationCount(): number {
    return useContext(PaginationCountContext)
}
