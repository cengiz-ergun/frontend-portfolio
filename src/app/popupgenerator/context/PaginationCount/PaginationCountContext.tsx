import { ReactNode, createContext, useContext } from "react"
import Popups from "@root/public/popup-generator/data.json"

import { ITEM_PER_PAGINATION } from "@popUpGeneratorConstants/Constants.js"

const PaginationCountContext = createContext(0)

export function PaginationCountProvider({ children }: {children: ReactNode}){
    const arrayLength = Popups.length
    const paginationCount: number = arrayLength % ITEM_PER_PAGINATION == 0 ? arrayLength / ITEM_PER_PAGINATION : Math.floor(arrayLength/12) + 1 
    return (
        <PaginationCountContext.Provider value={paginationCount}>
            {children}
        </PaginationCountContext.Provider>
    )
}

export function usePaginationCount():number {
    return useContext(PaginationCountContext)
}
