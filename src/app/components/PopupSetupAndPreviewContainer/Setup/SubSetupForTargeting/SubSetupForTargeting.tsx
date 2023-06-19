import React, { useState } from "react"
import { Toggle } from "../Toggle"
import { ToggleState } from "../Toggle/Toggle"
import { InputForTargeting } from "../InputForTargeting"
import { usePopupState } from "@root/src/app/context/PopupState/PopupState"
import { IPopup } from "@root/src/app/types/types"

type Props = {
    miniHeader: string
    stateKey: string
    stateValue: string
    placeholder: string
    inputType: "Number" | "String"
}

export const SubSetupForTargeting = (props: Props) => {
    const state = usePopupState() as IPopup
    console.log(state)
    const [toggleState, setToggleState] = useState<ToggleState>("active-right")
    return (
        <div className="mb-8">
            <div className="flex flex-row justify-between items-center mb-4 w-full">
                <div>{props.miniHeader}</div>
                <Toggle
                    stateKey={props.stateKey}                    
                    toggleState={toggleState}
                    setToggleState={setToggleState}
                />
            </div>
            <InputForTargeting
                stateKey={props.stateKey}
                stateValue={props.stateValue}
                toggleState={toggleState}
                placeholder={props.placeholder}
                inputType={props.inputType}
            />
        </div>
    )
}
