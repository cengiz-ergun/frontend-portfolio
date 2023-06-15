"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

const PaginationSelectionContext = createContext(0)
const PaginationSelectionSetContext = createContext<any>({} as any)

export function PaginationSelectionProvider({ children }: {children: ReactNode}) {
    const [paginationSelection, setPaginationSelection] = useState(1)
    return (
        <PaginationSelectionContext.Provider value={paginationSelection}>
            <PaginationSelectionSetContext.Provider value={setPaginationSelection}>
                {children}
            </PaginationSelectionSetContext.Provider>
        </PaginationSelectionContext.Provider>
    )
}

export function usePaginationSelection(): number {
    return useContext(PaginationSelectionContext)
}

export function usePaginationSelectionSet(): Dispatch<SetStateAction<number>> {
    return useContext(PaginationSelectionSetContext)
}
