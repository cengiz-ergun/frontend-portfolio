import React from "react"
import { POPUP_POSITION_PLACES } from "@root/src/app/constants/Constants"
import {
    usePopupState,
    usePopupStateDispatch,
} from "@root/src/app/context/PopupState/PopupState"

type Props = {}

export const Position = (props: Props) => {
    const state = usePopupState()
    const dispatch = usePopupStateDispatch()
    return (
        <div className="flex flex-row w-20 flex-wrap gap-1">
            {POPUP_POSITION_PLACES.map((position) => (
                <div
                    key={position}
                    className={`w-[24px] cursor-pointer border border-solid border-black h-4 hover:bg-popup-position-selection ${
                        state["position"] == position
                            ? "bg-popup-position-selection"
                            : ""
                    }`}
                    onClick={() => dispatch({
                        type: 'popup_state_property_changed',
                        payload: position,
                        property: 'position'
                    })}
                ></div>
            ))}
        </div>
    )
}
