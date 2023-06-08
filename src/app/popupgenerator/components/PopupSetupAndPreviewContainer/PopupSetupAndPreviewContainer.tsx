import React from "react"
import { Setup } from "./Setup"
import { Preview } from "./Preview"

type Props = {}

export const PopupSetupAndPreviewContainer = (props: Props) => {
    return (
        <>
            {" "}
            <div  className="flex flex-col lg:flex-row gap-5">
                <Setup />
                <Preview />
            </div>
        </>
    )
}
