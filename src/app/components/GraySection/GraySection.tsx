import React from "react"

type Props = {}

export const GraySection = (props: Props) => {
    return (
        <div className="w-full flex flex-row justify-between flex-wrap gap-5 sm:gap-0">
            <div className="flex flex-col gap-4">
                <span className="text-7xl font-poppins font-semibold">3x</span>
                <span className="font-inter font-medium w-[140px]">
                    Increase Conversion Rate
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-7xl font-poppins font-semibold">
                    120%
                </span>
                <span className="font-inter font-medium w-[140px]">
                    Email Subscribers
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-7xl font-poppins font-semibold">
                    390%
                </span>
                <span className="font-inter font-medium w-[140px]">
                    More Customer Engagement
                </span>
            </div>
            <div className="text-4xl w-[344px] font-semibold">
                Popup generator meets all your business needs.
            </div>
        </div>
    )
}
