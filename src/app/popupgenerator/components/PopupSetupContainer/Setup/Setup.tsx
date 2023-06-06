import React from "react"
import { SubHead } from "../../SubHead"
import { SubSetup } from "./SubSetup"
import { Size } from "./Size"
import { Position } from "./Position"

type Props = {}

export const Setup = (props: Props) => {
    return (
        <div className="min-w-[378px]">
            <SubHead num={2} subHeaderText="Appearance (Size, colors, logo)" />
            <SubSetup miniHeader="Size">
                <Size />
            </SubSetup>
            <SubSetup miniHeader="Position">
                <Position />
            </SubSetup>
        </div>
    )
}
