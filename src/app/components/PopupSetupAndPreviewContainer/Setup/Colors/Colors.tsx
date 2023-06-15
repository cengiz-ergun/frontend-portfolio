import { POPUP_AVAILABLE_COLORS } from "@root/src/app/constants/Constants"
import React from "react"
import Color from "./Color/Color"

type Props = {}

export const Colors = (props: Props) => {
    return (
        <div className="flex flex-row gap-2.5">
            {
                POPUP_AVAILABLE_COLORS.map((color) => (
                    <Color colorName={color} key={color}/>
                ))
            }
        </div>
    )
}
