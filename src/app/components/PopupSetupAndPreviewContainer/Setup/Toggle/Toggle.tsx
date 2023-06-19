import { usePopupStateDispatch } from "@root/src/app/context/PopupState/PopupState"
import React, { useState } from "react"

type Props = {
    stateKey: string
    toggleState: ToggleState
    setToggleState: React.Dispatch<React.SetStateAction<ToggleState>>
}
export type ToggleState = "passive-left" | "active-right"

export const Toggle = (props: Props) => {
    const dispatch = usePopupStateDispatch()
    return (
        <div className={`w-8 h-4 flex flex-row ${(props.toggleState == "passive-left") ? "bg-black opacity-5" : "bg-toggle" } rounded-3xl justify-center items-center gap-0.5`}>
            <div
                className={`cursor-pointer w-3 h-3 ${
                    props.toggleState == "passive-left"
                        ? "bg-white"
                        : "bg-toggle"
                } rounded-full`}
                onClick={() => {
                    props.setToggleState("passive-left")
                    dispatch({
                        type: "popup_state_property_changed",
                        property: props.stateKey,
                        payload: "",
                    })
                }}
            ></div>
            <div
                className={`cursor-pointer w-3 h-3 ${
                    props.toggleState == "active-right"
                        ? "bg-white"
                        : "bg-black opacity-5"
                } rounded-full`}
                onClick={() => props.setToggleState("active-right")}
            ></div>
        </div>
    )
}
