import {
    usePopupState,
    usePopupStateDispatch,
} from "@root/src/app/popupgenerator/context/PopupState/PopupState"
import React from "react"

type Props = {
    colorName: string
}

export const Color = (props: Props) => {
    const state = usePopupState()
    const dispatch = usePopupStateDispatch()

    const currentColor = state["color"]
    return (
        // <div>{props.colorName}</div>
        <div
            className={`w-10 h-10 rounded-xl cursor-pointer border border-gray-400 ${
                currentColor == props.colorName ? "p-6" : ""
            }`}
            style={{ background: props.colorName }}
            onClick={() =>
                dispatch({
                    type: "popup_state_property_changed",
                    payload: props.colorName,
                    property: "color",
                })
            }
        ></div>
    )
}

export default Color
