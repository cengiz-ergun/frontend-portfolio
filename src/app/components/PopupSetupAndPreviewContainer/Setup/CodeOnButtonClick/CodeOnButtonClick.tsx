"use client"

import { ORIGIN_ADDRESS } from "@root/src/app/constants/Constants"
import { usePopupSelection } from "@root/src/app/context/PopupSelection"
import { usePopupState } from "@root/src/app/context/PopupState/PopupState"
import Link from "next/link"
import React, { useEffect, useState } from "react"

type Props = {}

export const CodeOnButtonClick = (props: Props) => {
    const [isCopied, setIsCopied] = useState(false)
    const [generatedCode, setGeneratedCode] = useState("")

    const state = usePopupState()
    const selectedId = usePopupSelection()

    useEffect(() => {
        setGeneratedCode("")
    }, [state])

    const code =
        selectedId == 1
            ? `<script type="text/javascript" src="${ORIGIN_ADDRESS}/popups/securitycode/script.js"></script><script> window.start.init({ size: "${state.size}", position: "${state.position}", color: "${state.color}", logo: "${state.logoFileName}", afterXSeconds: "${state.afterXSeconds}", contents: {
        content1: "${state.contents.content1}",
        content2: "${state.contents.content2}",
        content3: "${state.contents.content3}",
        content4: "${state.contents.content4}",
        content5: "${state.contents.content5}"
    }})</script>`
            : `<script type="text/javascript" src="${ORIGIN_ADDRESS}/popups/installlocalnow/script.js"></script><script> window.start.init({ size: "${state.size}", position: "${state.position}", color: "${state.color}", image: "${state.imageFileName}", afterXSeconds: "${state.afterXSeconds}", contents: {
        content1: "${state.contents.content1}",
        content2: "${state.contents.content2}",
        content3: "${state.contents.content3}",
        content4: "${state.contents.content4}"
    }})</script>`
    return (
        <div className={`w-full `}>
            <Link href={"#code"}>
                <button
                    onClick={() => {
                        setGeneratedCode(code)
                        setIsCopied(false)
                    }}
                    className="py-5 px-7 rounded-xl bg-button text-white hover:opacity-90 mb-8"
                >
                    Get your Code
                </button>
            </Link>

            {generatedCode !== "" && (
                <>
                    <div
                        id="code"
                        className={`mb-4 w-full rounded-lg p-4 flex flex-col gap-4 justify-end items-end text-xs bg-codeGeneration text-white`}
                    >
                        <p className="font-thin w-full">{code}</p>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(code)
                                setIsCopied(true)
                            }}
                            className="bg-button hover:opacity-90 py-1 px-4 cursor-pointer rounded-3xl"
                        >
                            {isCopied ? "Copied!" : "Copy the code"}
                        </button>
                    </div>

                    <p className="text-xs">
                        Copy and paste the embed code above just before the
                        closing {`</body>`} tag of your website template file.
                    </p>
                </>
            )}
        </div>
    )
}
