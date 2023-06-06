import React, { ReactNode } from "react"

type Props = {
    miniHeader: string
    children: ReactNode
}

export const SubSetup = (props: Props) => {
    return (
        <div className="mb-8">
            <div className="font-normal font-inter text-sm mb-4">
                {props.miniHeader}
            </div>
            {props.children}
        </div>
    )
}
