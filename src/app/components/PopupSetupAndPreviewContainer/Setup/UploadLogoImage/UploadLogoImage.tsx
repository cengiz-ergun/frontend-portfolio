"use client"

var path = require("path")

import Image from "next/image"
import axios from "axios"
import React, { useRef, useState } from "react"
import imageOrLogoSource from "@root/public/popup-generator/logo-image/upload-logo-image.svg"
import { ORIGIN_ADDRESS } from "@root/src/app/constants/Constants"
import { usePopupStateDispatch } from "@root/src/app/context/PopupState/PopupState"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useUploadStateSet } from "@root/src/app/context/UploadState/UploadStateContext"
import { CoverAsNotImplemented } from "@root/src/app/helper/CoverAsNotImplemented"

type Props = {
    imageOrLogo: "logo" | "image"
}

const MySwal = withReactContent(Swal)

export const UploadLogoImage = (props: Props) => {
    const [swtch, setSwtch] = useState(false)

    const dispatchPopupState = usePopupStateDispatch()
    const setUploadState = useUploadStateSet()

    const inputFile = useRef<HTMLInputElement | null>(null)
    const onFileUploadClick = () => {
        inputFile.current?.click()
    }
    const onFileUploadChangeHandler = async (e: any) => {
        setUploadState("active")
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0] as File
            var form = new FormData()
            form.append("file", file)
            var url = path.join("api", "file")
            const axiosResponse = await axios
                .post(url, form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    dispatchPopupState({
                        type: "popup_state_property_changed",
                        payload: file.name,
                        property:
                            props.imageOrLogo == "logo"
                                ? "logoFileName"
                                : "imageFileName", //risky
                    })
                    setUploadState("passive")
                    return
                })
                .catch((error) => {
                    setUploadState("passive")
                    MySwal.fire({
                        icon: "error",
                        title: error.response.data.message,
                        showCloseButton: true,
                    })
                    return
                })
        }
    }
    return (
        <div
            className="relative w-full flex flex-col gap-5 justify-center items-center px-16 py-8 rounded-xl border border-dashed border-upload-logo-image-border"
            onMouseEnter={() => setSwtch(true)}
            onMouseLeave={() => setSwtch(false)}
        >
            {swtch && (
                <CoverAsNotImplemented message="File upload isn't implemented yet. " />
            )}
            <div
                className="p-6 bg-purple-50 cursor-pointer rounded-xl"
                onClick={() => onFileUploadClick()}
            >
                <Image src={imageOrLogoSource} alt="Upload-logo-image" />
                <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={(e) => onFileUploadChangeHandler(e)}
                />
            </div>
            <div>
                <span className="font-inter">
                    Upload your {props.imageOrLogo}
                </span>
            </div>
        </div>
    )
}
