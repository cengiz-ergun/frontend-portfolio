import React, { useState } from "react"
import { CoverAsNotImplemented } from "../../../helper/CoverAsNotImplemented"

type Props = {}

export const Preview = (props: Props) => {
    // const [swtch, setSwtch] = useState(false)
    return (
        <div
            className="relative flex bg-slate-100 w-full mt-24"
            // onMouseEnter={() => setSwtch(true)}
            // onMouseLeave={() => setSwtch(false)}
        >
            {/* {swtch && <CoverAsNotImplemented message="Popup will be shown here soon."/>} */}
            <CoverAsNotImplemented message="Popup will be shown here soon."/>
        </div>
    )
}
