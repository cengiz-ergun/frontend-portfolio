'use client'

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import { UploadState } from "@types"

const UploadStateContext = createContext<UploadState>("passive")
const UploadStateSetContext = createContext<any>({} as any)

type Props = {
    children: ReactNode
}

export const UploadStateProvider = (props: Props) => {
    const [uploadState, setUploadState] = useState("passive" as UploadState)
    return (
        <UploadStateContext.Provider value={uploadState}>
            <UploadStateSetContext.Provider value={setUploadState}>
                {props.children}
            </UploadStateSetContext.Provider>
        </UploadStateContext.Provider>
    )
}

export function useUploadState(): UploadState {
    return useContext(UploadStateContext)
}

export function useUploadStateSet(): Dispatch<SetStateAction<UploadState>> {
    return useContext(UploadStateSetContext)
}
