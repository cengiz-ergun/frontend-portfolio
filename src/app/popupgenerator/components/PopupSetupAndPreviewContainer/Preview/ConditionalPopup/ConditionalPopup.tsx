import { usePopupSelection } from "@root/src/app/popupgenerator/context/PopupSelection"
import React from "react"
import { SecurityCode } from "./SecurityCode"
import { InstallLocalNow } from "./InstallLocalNow"

type Props = {}

export const ConditionalPopup = (props: Props) => {
    const selectedPopupId = usePopupSelection()
    // console.log(selectedPopupId)
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
