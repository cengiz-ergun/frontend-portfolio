import Image from "next/image"
import React, { useState } from "react"
import imageOrLogoSource from "@root/public/popup-generator/logo-image/upload-logo-image.svg"
import { CoverAsNotImplemented } from "@root/src/app/popupgenerator/helper/CoverAsNotImplemented"

type Props = {
    imageOrLogo: "logo" | "image"
}

export const UploadLogoImage = (props: Props) => {
    const [swtch, setSwtch] = useState(false)
    return (
        <div
            className="relative w-full flex flex-col gap-5 justify-center items-center px-16 py-8 rounded-xl border border-dashed border-upload-logo-image-border"
            onMouseEnter={() => setSwtch(true)}
            onMouseLeave={() => setSwtch(false)}
        >
            <div className="p-6 bg-purple-50 cursor-pointer rounded-xl">
                <Image src={imageOrLogoSource} alt="asdasd" />
            </div>
            <div>
                <span className="font-inter">
                    Upload your {props.imageOrLogo}
                </span>
            </div>
            {swtch && <CoverAsNotImplemented message="Upload functionality isn't ready."/>}
            {/* <CoverAsNotImplemented message="" /> */}
        </div>
    )
}
