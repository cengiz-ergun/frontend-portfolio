import React, { useState } from "react"
import Image from "next/image"

import { usePaginationCount } from "../../context/PaginationCount"
import { usePaginationSelection } from "../../context/PaginationSelection"


import Popups from "@root/public/popup-generator/data.json"
import { ITEM_PER_PAGINATION } from "@popUpGeneratorConstants/Constants.js"

import DetermineItems from "../../helper/DetemineItems"
import { CoverPopupListItem } from "./CoverPopupListItem"
import { usePopupSelection, usePopupSelectionSet } from "../../context/PopupSelection"

export function PopupList() {
    const [hoveredPopupListItemId, setHoveredPopupListItemId] = useState(0)

    const paginationSelection = usePaginationSelection()
    const popupSelection = usePopupSelection()
    const popupSelectionSet = usePopupSelectionSet()

    var paginatedArray = DetermineItems(
        ITEM_PER_PAGINATION,
        Popups,
        paginationSelection,
    )

    //console.log(popupSelection)
    console.log(hoveredPopupListItemId)
    return (
        <div className="mb-8 flex flex-row flex-wrap gap-8 w-fit justify-center">
            {paginatedArray.map((o: any) => (
                <div
                    key={o.id}
                    className="flex justify-center items-center w-72 h-52 bg-paginations relative cursor-pointer"
                    onClick={() => popupSelectionSet(o.id)}
                    onMouseEnter={(e) => setHoveredPopupListItemId(o.id)}
                    onMouseLeave={(e) => setHoveredPopupListItemId(0)}
                >                    
                    {
                        (o.id == popupSelection || o.id == hoveredPopupListItemId) && <CoverPopupListItem key={o.id} />
                    }                    
                    <Image
                        alt="alt-text"
                        src={o.path}
                        width={o.width}
                        height={o.height}
                    />
                </div>
            ))}
        </div>
    )
}

export default PopupList
