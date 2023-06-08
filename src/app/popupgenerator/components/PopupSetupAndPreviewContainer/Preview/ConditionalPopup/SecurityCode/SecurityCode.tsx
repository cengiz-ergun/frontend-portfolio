import { usePopupState } from "@root/src/app/popupgenerator/context/PopupState/PopupState"
import iconSource from "@root/public/popup-generator/logo-image/star.svg"
import React from "react"
import Image from "next/image"

type Props = {}

export const SecurityCode = (props: Props) => {
    const state = usePopupState()

    const size = state.size
    const position = state.position
    const color = state.color
    const contents = state.contents
    // console.log(state)
    return (
        // py-10 px-16
        <div className="absolute inset-0">
            <div className={`h-full flex flex-col text-center ${position} `}>
                <div
                    className={`${
                        size == "large"
                            ? "py-10 px-16"
                            : size == "medium"
                            ? "py-8 px-12"
                            : "py-6 px-8"
                    } border border-solid border-black bg-white`}
                >
                    <div
                        className={`${
                            size == "large"
                                ? "w-20 h-20 mb-8"
                                : size == "medium"
                                ? "w-20 h-20 mb-7"
                                : "w-20 h-20 mb-6"
                        } flex justify-center items-center mx-auto rounded-full`}
                        style={{ backgroundColor: color }}
                    >
                        <Image src={iconSource} alt="ASDA" />
                    </div>
                    <div className={`${
                            size == "large"
                                ? "text-3xl mb-5"
                                : size == "medium"
                                ? "text-2xl mb-4"
                                : "text-xl mb-3"
                        } font-inter font-bold`}>
                        {contents.content1}
                    </div>
                    <div className={`${
                            size == "large"
                                ? "text-xl mb-10"
                                : size == "medium"
                                ? "text-lg mb-9"
                                : "text-base mb-8"
                        } font-inter font-normal`}>
                        {contents.content2}
                    </div>
                    <input
                        className={`${
                          size == "large"
                              ? "h-12 pl-3 mb-8"
                              : size == "medium"
                              ? "h-11 pl-2.5 mb-7"
                              : "h-10 pl-2 mb-6"
                      } rounded-lg border border-solid border-popup-preview-input outline-none focus:border-gray-700`}
                        defaultValue={contents.content3}
                    />
                    <div className="flex flex-row justify-between gap-4">
                        <button className="py-2 px-14 text-black bg-white rounded-lg border border-solid border-popup-preview-input">
                            {contents.content4}
                        </button>
                        <button
                            className="py-4 px-14 rounded-lg text-white"
                            style={{ backgroundColor: color }}
                        >
                            {contents.content5}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
