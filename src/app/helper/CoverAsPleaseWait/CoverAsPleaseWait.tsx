import React from "react"

type Props = {}

export const CoverAsPleaseWait = (props: Props) => {
    return (
        <div className="absolute z-50 inset-0 bg-[rgba(0,0,0,.6);] text-white flex justify-center items-center">
            <p className="z-50 text-5xl">Please Wait...</p>
        </div>
    )
}
