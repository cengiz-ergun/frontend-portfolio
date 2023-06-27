"use client"

import { UploadButton } from "@uploadthing/react"

import { OurFileRouter } from "@root/src/app/api/uploadthing/core"

import Image from "next/image"
import React, { useEffect } from "react"
import imageOrLogoSource from "@root/public/popup-generator/logo-image/upload-logo-image.svg"
import {
    usePopupStateDispatch,
} from "@root/src/app/context/PopupState/PopupState"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useUploadStateSet } from "@root/src/app/context/UploadState/UploadStateContext"

type Props = {
    imageOrLogo: "logo" | "image"
}

const MySwal = withReactContent(Swal)

export const UploadLogoImage = (props: Props) => {
    const uploadStateSet = useUploadStateSet()

    const dispatchPopupState = usePopupStateDispatch()
    let item: any

    useEffect(() => {
        item = document.getElementsByClassName("ut-hidden")[0]
        document
            .getElementsByClassName("ut-hidden")[0]
            .addEventListener("change", () => {
                uploadStateSet("active")
            })
    }, [])

    // Are there any behaviour differences between cypress(chrome) and real chrome? if commented out that code, it succesfully work in cypress browser but not real browser.
    // Step 2 // For production, that is must
    if (typeof window !== "undefined") {
        // Step 1 // For local, that code is enough
        item = document.getElementsByClassName("ut-hidden")[0]
    }

    const onFileUploadClick = () => {
        item.click()
    }

    return (
        <div className="relative w-full flex flex-col gap-5 justify-center items-center px-16 py-8 rounded-xl border border-dashed border-upload-logo-image-border">
            <div
                data-test-id="click-for-upload"
                className="p-6 bg-purple-50 cursor-pointer rounded-xl"
                onClick={() => onFileUploadClick()}
            >
                <Image src={imageOrLogoSource} alt="Upload-logo-image" />
                <div className="hidden">
                    <UploadButton<OurFileRouter>
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            dispatchPopupState({
                                type: "popup_state_property_changed",
                                payload: (res as Array<any>)[0].fileUrl,
                                property:
                                    props.imageOrLogo == "logo"
                                        ? "logoFileName"
                                        : "imageFileName", //risky
                            })
                            uploadStateSet("passive")
                            MySwal.fire({
                                icon: "success",
                                title: "Your file uploaded succesfully",
                                showCloseButton: true,
                            })
                        }}
                        onUploadError={(error: Error) => {
                            uploadStateSet("passive")
                            MySwal.fire({
                                icon: "error",
                                title: "File must be an image format with max size of 1MB",
                                showCloseButton: true,
                            })
                        }}
                    />
                </div>
            </div>
            <div>
                <span className="font-inter">
                    Upload your {props.imageOrLogo}
                </span>
            </div>
        </div>
    )
}
