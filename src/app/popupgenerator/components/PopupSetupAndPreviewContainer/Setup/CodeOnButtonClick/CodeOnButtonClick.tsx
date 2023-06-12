import { usePopupSelection } from "@root/src/app/popupgenerator/context/PopupSelection"
import { usePopupState } from "@root/src/app/popupgenerator/context/PopupState/PopupState"
import React, { useEffect, useState } from "react"

type Props = {}

export const CodeOnButtonClick = (props: Props) => {
    const state = usePopupState()
    const selectedId = usePopupSelection()
    const [isCopied, setIsCopied] = useState(false)
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    const code = (selectedId == 1) ? `<script type="text/javascript" src="${origin}/popups/securitycode/script.js"></script><script> window.start.init({ size: "${
        state.size
    }", position: "${state.position}", color: "${state.color}", contents: {
        content1: "${state.contents.content1}",
        content2: "${state.contents.content2}",
        content3: "${state.contents.content3}",
        content4: "${state.contents.content4}",
        content5: "${state.contents.content5}"
    }})</script>` : `<script type="text/javascript" src="${origin}/popups/installlocalnow/script.js"></script><script> window.start.init({ size: "${
        state.size
    }", position: "${state.position}", color: "${state.color}", contents: {
        content1: "${state.contents.content1}",
        content2: "${state.contents.content2}",
        content3: "${state.contents.content3}",
        content4: "${state.contents.content4}",
    }})</script>`
    const [generatedCode, setGeneratedCode] = useState("")
    useEffect(() => {
        setGeneratedCode("")
    }, [state])
    return (
        <div className="w-full">
            <button
                onClick={() => {
                    setGeneratedCode(code)
                    setIsCopied(false)
                }}
                className="py-5 px-7 rounded-xl bg-button text-white hover:opacity-90 mb-8"
            >
                Get your Code
            </button>
            {generatedCode !== "" && (
                <>
                    <div className="mb-4 w-full rounded-lg p-4 flex flex-col gap-4 justify-end items-end text-xs bg-codeGeneration text-white">
                        <p className="font-thin">{code}</p>
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
