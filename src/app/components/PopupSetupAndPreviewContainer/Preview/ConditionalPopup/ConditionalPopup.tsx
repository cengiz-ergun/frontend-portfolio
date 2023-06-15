"use client"

import { usePopupSelection } from "@root/src/app/context/PopupSelection"
import React from "react"
import { SecurityCode } from "./SecurityCode"
import { InstallLocalNow } from "./InstallLocalNow"

type Props = {}

export const ConditionalPopup = (props: Props) => {
    const selectedPopupId = usePopupSelection()
    let popUpWillBeRendered
    switch (selectedPopupId) {
        case 1:
            popUpWillBeRendered = <SecurityCode />
            break
        case 2:
            popUpWillBeRendered = <InstallLocalNow />
            break
        default:
            break
    }
    return <div className="w-full">{popUpWillBeRendered}</div>
}
