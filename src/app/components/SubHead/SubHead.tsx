import React from "react"

export function SubHead({
    num,
    subHeaderText,
}: {
    num: number
    subHeaderText: string
}) {
    return (
        <>
            <div className="flex flex-row items-center gap-x-4 mb-8 mt-24">
                <div className="w-9 h-9 flex justify-center items-center rounded-full bg-subHeaderNumberBg">
                    <span>{num}</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg">{subHeaderText}</h3>
            </div>
        </>
    )
}

export default SubHead
