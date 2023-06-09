import React from "react"
import { ConditionalPopup } from "./ConditionalPopup"


type Props = {}

export const Preview = (props: Props) => {
    return (
        <div id="preview" className="sticky top-1 hidden lg:flex bg-gray-50 w-full h-screen mt-24 border-2 border-solid">
            <ConditionalPopup />
        </div>
    )
}
