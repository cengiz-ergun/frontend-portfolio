import React from "react"

import { POPUP_SIZE_TYPES } from "@root/src/app/constants/Constants"
import {
    usePopupState,
    usePopupStateDispatch,
} from "@root/src/app/context/PopupState/PopupState"

type Props = {}

export const Size = (props: Props) => {
    const state = usePopupState()
    const dispatch = usePopupStateDispatch()

    return (
        <div className="flex flex-row rounded-lg w-min overflow-clip bg-size-selection p-0.5">
            {POPUP_SIZE_TYPES.map((size) => (
                <span
                    key={size}
                    className={`block bg-size-selection hover:bg-white px-5 py-3 cursor-pointer ${
                        state["size"] == size ? "bg-white" : ""
                    }`}
                    onClick={() =>
                        dispatch({
                            type: "popup_state_property_changed",
                            payload: size,
                            property: "size",
                        })
                    }
                >
                    {size}
                </span>
            ))}
        </div>
    )
}
