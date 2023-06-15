import {
    usePopupState,
    usePopupStateDispatch,
} from "@root/src/app/context/PopupState/PopupState"
import React from "react"

type Props = {
    stateKey: string
    stateValue: string
}

export const Content = (props: Props) => {
    const dispatch = usePopupStateDispatch()
    return (
        <input
            className="w-full border border-solid border-content-input-border outline-none focus:border-purple-800 rounded-lg h-9 px-2"
            // defaultValue={props.stateValue}
            value={props.stateValue}
            onChange={(e) =>
                dispatch({
                    type: "popup_state_contents_property_changed",
                    property: props.stateKey,
                    payload: e.target.value,
                })
            }
        ></input>
    )
}
