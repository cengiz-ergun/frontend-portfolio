import React from "react"
import { Setup } from "./Setup"
import { Preview } from "./Preview"
import { PopupStateProvider } from "../../context/PopupState"


type Props = {}

export const PopupSetupContainer = (props: Props) => {
    return (
        <>
            <PopupStateProvider>
                <div className="flex sm:flex-col lg:flex-row">
                    <Setup />
                    <Preview />
                </div>
            </PopupStateProvider>
        </>
    )
}
