import React, { ReactNode, createContext, useContext } from "react"
import { useImmerReducer } from "use-immer"
import {
    InstallLocalNowPopup,
    SecurityCodePopup,
} from "../../types/types"

type Props = {
    children: ReactNode
}

type Action = {
    type: string
    payload: string
    property?: string
}

const securityCodePopup = new SecurityCodePopup()
const installLocalNowPopup = new InstallLocalNowPopup()

const PopupContext = createContext<any>({} as any)
const PopupDispatchContext = createContext<any>({} as any)

export const PopupStateProvider = (props: Props) => {
    const [state, dispatch] = useImmerReducer(popUpReducer, securityCodePopup)
    // console.log(state)
    return (
        <PopupContext.Provider value={state}>
            <PopupDispatchContext.Provider value={dispatch}>
                {props.children}
            </PopupDispatchContext.Provider>
        </PopupContext.Provider>
    )
}

function popUpReducer(draft: any, action: Action) {
    switch (action.type) {
        case "select_another_popup": {
            if (action.payload == "1") {
                draft = securityCodePopup
            } else if (action.payload == "2") {
                draft = installLocalNowPopup
            }
            else{
                throw new Error("Selected not implemented popup"); 
            }
            return draft
        }

        case "popup_state_property_changed": {
            draft[action.property as string] = action.payload
        }
    }
}

export function usePopupState() {
    return useContext(PopupContext)
}

export function usePopupStateDispatch() {
    return useContext(PopupDispatchContext)
}
