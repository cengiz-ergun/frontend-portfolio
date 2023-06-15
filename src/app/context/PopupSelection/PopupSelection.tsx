"use client"

import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { createContext } from "react"

type Props = {
    children: ReactNode
}

const PopupSelectionContext = createContext(1)
const PopupSelectionSetContext = createContext<any>({} as any)

export const PopupSelectionProvider = (props: Props) => {
    const [popupSelection, setPopupSelection] = useState(1)
    return (
        <PopupSelectionContext.Provider value={popupSelection}>
            <PopupSelectionSetContext.Provider value={setPopupSelection}>
                {props.children}
            </PopupSelectionSetContext.Provider>
        </PopupSelectionContext.Provider>
    )
}

export function usePopupSelection(): number {
    return useContext(PopupSelectionContext)
}

export function usePopupSelectionSet(): Dispatch<SetStateAction<number>> {
    return useContext(PopupSelectionSetContext)
}
