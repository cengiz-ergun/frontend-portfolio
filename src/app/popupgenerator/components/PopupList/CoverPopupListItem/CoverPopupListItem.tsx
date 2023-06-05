import React from "react"

export function CoverPopupListItem() {
    return (
        <>
            <div className="absolute bg-white py-4 px-6 rounded-xl z-20 text-popUpListItemInnerText font-inter font-semibold text-base">
                Select Template
            </div>
            <div className="absolute bg-popUpListItemHoverOrSelected inset-0"></div>
        </>
    )
}

export default CoverPopupListItem
