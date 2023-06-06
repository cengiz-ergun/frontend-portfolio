import React, { ReactNode, createContext, useContext } from "react"
import { useImmerReducer } from "use-immer"
import { SecurityCode, initialSecurityCode } from "../../types/types"
import { usePopupSelection } from "../PopupSelection"

type Props = {
    children: ReactNode
}

type Action = {
    type: string
    payload: string
    property: string
}

const PopupContext = createContext<any>({} as any)
const PopupDispatchContext = createContext<any>({} as any)

export const PopupStateProvider = (props: Props) => {
    // const popupSelection = usePopupSelection()
    const [state, dispatch] = useImmerReducer(popUpReducer, initialSecurityCode)
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
        case "popup_state_property_changed": {
            draft[action.property] = action.payload 
        }
    }
}

export function usePopupState() {
    return useContext(PopupContext)
}

export function usePopupStateDispatch() {
    return useContext(PopupDispatchContext)
}
