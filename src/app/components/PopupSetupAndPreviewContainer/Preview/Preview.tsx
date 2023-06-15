"use client"

import React, { useState } from "react"
import { ConditionalPopup } from "./ConditionalPopup"
import Image from "next/image"
import hideImgSource from "@root/public/general/hide.png"
import showImgSource from "@root/public/general/show.png"
import { useUploadState } from "@root/src/app/context/UploadState/UploadStateContext"
import { CoverAsPleaseWait } from "@root/src/app/helper/CoverAsPleaseWait"

type Props = {}

export const Preview = (props: Props) => {
    const uploadState = useUploadState()
    const [showed, setIsShowed] = useState(true)
    return (
        <>
            <div
                id="preview"
                className={`${
                    showed ? "fixed z-50 inset-0 w-full h-screen" : ""
                } lg:z-auto lg:sticky lg:top-1 lg:bottom-1 lg:flex bg-gray-50 lg:w-full lg:h-screen lg:mt-24 lg:border-2 lg:border-solid`}
            >
                {
                    uploadState == "active" && (
                        <CoverAsPleaseWait />
                    )
                }
                <div className="lg:hidden z-50 fixed right-5 top-10 w-fit">
                    <Image
                        className="cursor-pointer"
                        alt="hideOrShow"
                        src={showed == false ? hideImgSource : showImgSource}
                        onClick={() => setIsShowed(!showed)}
                        width={36}
                        height={36}
                    />
                </div>
                <div className="hidden lg:block">
                    <ConditionalPopup />
                </div>
                <div className="block lg:hidden">
                    {showed && <ConditionalPopup />}
                </div>
            </div>
        </>
    )
}
