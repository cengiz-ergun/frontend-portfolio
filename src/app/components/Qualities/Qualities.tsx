import React from "react"
import { Quality } from "./Quality/Quality"
import imgSourceConversionReady from "@root/public/general/conversion-ready.svg"
import imgSourceGood from "@root/public/general/good.svg"
import imgSourceVerified from "@root/public/general/verified.svg"

type Props = {}

export const Qualities = (props: Props) => {
    return (
        <div id="features">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
                Conversion & UX ready popups & modals
            </h2>
            <div className="flex flex-row justify-between flex-wrap gap-y-8">
                <Quality
                    imgSource={imgSourceGood}
                    header="Pixel Perfect"
                    content="Helps you calculate your email
marketing to measure success."
                />
                <Quality
                    imgSource={imgSourceConversionReady}
                    header="Conversion Ready"
                    content="Empowers your emails by
                    generating a free code for
                    a CTA in your subject line."
                />
                <Quality
                    imgSource={imgSourceVerified}
                    header="Modern & Useful"
                    content="Enables you to estimate the
                    total profit of your investment
                    on a popup service."
                />
            </div>
        </div>
    )
}
