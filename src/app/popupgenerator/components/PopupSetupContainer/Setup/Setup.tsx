import React from "react"
import { SubHead } from "../../SubHead"
import { SubSetup } from "./SubSetup"
import { Size } from "./Size"
import { Position } from "./Position"
import { Colors } from "./Colors"
import { UploadLogoImage } from "./UploadLogoImage"
import { Contents } from "./Contents"
import { usePopupState } from "../../../context/PopupState/PopupState"

type Props = {}

export const Setup = (props: Props) => {
    const state = usePopupState()
    return (
        <div className="w-full sm:w-[378px]">
            <SubHead num={2} subHeaderText="Appearance (Size, colors, logo)" />
            <SubSetup miniHeader="Size">
                <Size />
            </SubSetup>
            <SubSetup miniHeader="Position">
                <Position />
            </SubSetup>
            <SubSetup miniHeader="Colors">
                <Colors />
            </SubSetup>
            <SubSetup miniHeader="Upload Logo">
                <UploadLogoImage imageOrLogo="logo" />
            </SubSetup>
            {/* <SubSetup miniHeader="Upload Image">
                <UploadLogoImage imageOrLogo="image" />
            </SubSetup> */}

            <SubHead num={3} subHeaderText="Content" />
            <SubSetup miniHeader="Edit your content">
                <Contents contents={state.contents} />
            </SubSetup>
            <SubSetup miniHeader="Upload Image">
                <UploadLogoImage imageOrLogo="image" />
            </SubSetup>
        </div>
    )
}
