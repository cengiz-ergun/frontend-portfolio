import React from "react"

type Props = {
    message: string
}

export const CoverAsNotImplemented = (props: Props) => {
    return (
        <div className="absolute inset-0 bg-gray-500 opacity-90 text-white flex flex-col gap-20 text-center text-xl pt-10">
            <div className="sticky top-10">
                <div>This Section is not implemented yet.</div>{" "}
                <div>{props.message}</div>
            </div>
        </div>
    )
}
