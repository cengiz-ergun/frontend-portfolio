import React from "react"
import { Setup } from "./Setup"
import { Preview } from "./Preview"

type Props = {}

export const PopupSetupContainer = (props: Props) => {
    return (
        <>
            {" "}
            <div className="flex flex-col lg:flex-row">
                <Setup />
                <Preview />
            </div>
        </>
    )
}
