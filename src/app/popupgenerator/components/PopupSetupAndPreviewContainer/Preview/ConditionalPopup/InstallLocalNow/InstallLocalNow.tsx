import { usePopupState } from "@root/src/app/popupgenerator/context/PopupState/PopupState"
import Image from "next/image"
import React from "react"
import imgSource from "@root/public/popup-generator/logo-image/install-local-now.png"

type Props = {}

export const InstallLocalNow = (props: Props) => {
    const state = usePopupState()

    const size = state.size
    const position = state.position
    const color = state.color
    const contents = state.contents
    return (
        <div className="absolute inset-0">
            <div className={`h-full flex flex-col text-center ${position}`}>
                <div className="flex flex-col border border-solid border-black bg-white rounded-t-xl">
                    <div>
                        <Image src={imgSource} alt="asda" width={(size == "large") ? 420 : ((size == "medium") ? 400 : 370)}/>
                    </div>
                    <div className={`font-inter flex flex-col items-center ${
                            size == "large"
                                ? "my-10"
                                : size == "medium"
                                ? "my-8"
                                : "my-6"
                        }`}>
                        <div className={`font-bold ${
                            size == "large"
                                ? "text-3xl mb-3"
                                : size == "medium"
                                ? "text-2xl mb-2"
                                : "text-xl mb-1"
                        }`}>
                            {contents.content1}
                        </div>
                        <div className={`font-normal ${
                            size == "large"
                                ? "text-xl mb-5"
                                : size == "medium"
                                ? "text-lg mb-4"
                                : "text-base mb-3"
                        } `}>
                            {contents.content2}
                        </div>
                        <div className={`flex flex-col justify-center items-center w-3/5 gap-3`}>
                            <button
                                className="w-full h-10 text-white rounded-lg"
                                style={{ backgroundColor: color }}
                            >
                                {contents.content3}
                            </button>
                            <button
                                className="w-full h-10 bg-white rounded-lg border border-solid border-popup-preview-input"                               
                            >
                                {contents.content4}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
