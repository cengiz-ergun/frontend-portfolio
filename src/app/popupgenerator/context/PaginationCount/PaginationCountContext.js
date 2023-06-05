import { createContext, useContext } from "react"
import Popups from "@root/public/popup-generator/data.json"

import { ITEM_PER_PAGINATION } from "@popUpGeneratorConstants/Constants.js"

const PaginationCountContext = createContext(null)

export function PaginationCountProvider({ children }) {
    const arrayLength = Popups.length
    const paginationCount = arrayLength % ITEM_PER_PAGINATION == 0 ? arrayLength / ITEM_PER_PAGINATION : Math.floor(arrayLength/12) + 1 
    return (
        <PaginationCountContext.Provider value={paginationCount}>
            {children}
        </PaginationCountContext.Provider>
    )
}

export function usePaginationCount() {
    return useContext(PaginationCountContext)
}
