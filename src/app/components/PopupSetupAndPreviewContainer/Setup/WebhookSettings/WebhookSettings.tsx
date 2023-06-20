import {
    usePopupState,
    usePopupStateDispatch,
} from "@root/src/app/context/PopupState/PopupState"
import { IPopup } from "@root/src/app/types/types"
import React from "react"

type Props = {}

export const WebhookSettings = (props: Props) => {
    const state = usePopupState() as IPopup
    const dispatch = usePopupStateDispatch()
    // console.log(state)
    return (
        <div className="mb-12">
            <div className="mb-4 font-medium text-base font-poppins">
                Webhook to Send data
            </div>
            <div className="text-sm mb-1">Enter your Webhook URL</div>
            <div className="text-xs mb-4">
                You can create a simple one with make.com
            </div>
            <input
                className="w-full border border-solid border-content-input-border outline-none focus:border-purple-800 rounded-lg h-9 px-2"
                placeholder="Your Webhook URL"
                value={state.webhookUrl}
                onChange={(e) => {
                    dispatch({
                        type: "popup_state_property_changed",
                        property: "webhookUrl",
                        payload: e.target.value,
                    })
                }}
            />
        </div>
    )
}
