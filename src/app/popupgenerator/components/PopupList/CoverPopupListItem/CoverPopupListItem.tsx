import React from "react"

export function CoverPopupListItem({isAvailable}: {isAvailable: boolean}) {
    return (
        <>
            <div className="absolute bg-white py-4 px-6 rounded-xl z-20 text-popUpListItemInnerText font-inter font-semibold text-base">                
                {
                    isAvailable ? "Select Template" : "Not Available"
                }
            </div>
            <div className={`absolute inset-0 ${isAvailable ? "bg-popUpListItemHoverOrSelected" : "bg-black opacity-50"}`}></div>
        </>
    )
}

export default CoverPopupListItem
