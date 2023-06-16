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

    if (typeof window !== "undefined") {
        item = document.getElementsByClassName("ut-hidden")[0]
    }

    const onFileUploadClick = () => {
        // inputFile.current?.click()

        item.click()
    }
    // const onFileUploadChangeHandler = async (e: any) => {
    //     setUploadState("active")
    //     if (e.target.files && e.target.files[0]) {
    //         const file = e.target.files[0] as File
    //         var form = new FormData()
    //         form.append("file", file)
    //         var url = path.join("api", "file")
    //         const axiosResponse = await axios
    //             .post(url, form, {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                 },
    //             })
    //             .then((response) => {
    //                 dispatchPopupState({
    //                     type: "popup_state_property_changed",
    //                     payload: file.name,
    //                     property:
    //                         props.imageOrLogo == "logo"
    //                             ? "logoFileName"
    //                             : "imageFileName", //risky
    //                 })
    //                 setUploadState("passive")
    //                 return
    //             })
    //             .catch((error) => {
    //                 setUploadState("passive")
    //                 MySwal.fire({
    //                     icon: "error",
    //                     title: error.response.data.message,
    //                     showCloseButton: true,
    //                 })
    //                 return
    //             })
    //     }
    // }
    return (
        <div className="relative w-full flex flex-col gap-5 justify-center items-center px-16 py-8 rounded-xl border border-dashed border-upload-logo-image-border">
            <div
                data-test-id="click-for-upload"
                className="p-6 bg-purple-50 cursor-pointer rounded-xl"
                onClick={() => onFileUploadClick()}
            >
                <Image src={imageOrLogoSource} alt="Upload-logo-image" />
                {/* <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={(e) => onFileUploadChangeHandler(e)}
                /> */}
                <div style={{ display: "none" }}>
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
