import {
    usePopupState,
    usePopupStateDispatch,
} from "@root/src/app/context/PopupState/PopupState"
import React from "react"
import { Toggle, ToggleState } from "../Toggle/Toggle"

type Props = {
    placeholder?: string
    stateKey: string
    stateValue?: string
    toggleState: ToggleState
}

export const InputForTargeting = (props: Props) => {
    const dispatch = usePopupStateDispatch()
    return (
        <input
            className={`${
                props.toggleState == "passive-left" ? "bg-black opacity-5" : ""
            } w-full border border-solid border-content-input-border outline-none focus:border-purple-800 rounded-lg h-9 px-2`}
            placeholder={
                props.toggleState == "active-right" ? props.placeholder : ""
            }
            value={props.stateValue}
            onChange={(e) => {
                if (!isNaN(e.target.value as any)) {
                    dispatch({
                        type: "popup_state_property_changed",
                        property: props.stateKey,
                        payload: e.target.value,
                    })
                }
            }}
        />
    )
}
