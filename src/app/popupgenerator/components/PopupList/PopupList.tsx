import React, { useState } from "react"
import Image from "next/image"

import { usePaginationSelection } from "../../context/PaginationSelection"

import Popups from "@root/public/popup-generator/data.json"
import { ITEM_PER_PAGINATION } from "@popUpGeneratorConstants/Constants.js"

import DetermineItems from "../../helper/DetemineItems"
import { CoverPopupListItem } from "./CoverPopupListItem"
import {
    usePopupSelection,
    usePopupSelectionSet,
} from "../../context/PopupSelection"
import { usePopupStateDispatch } from "../../context/PopupState/PopupState"
import Link from "next/link"

export function PopupList() {
    const [hoveredPopupListItemId, setHoveredPopupListItemId] = useState(0)

    const paginationSelection = usePaginationSelection()
    const popupSelection = usePopupSelection()
    const popupSelectionSet = usePopupSelectionSet()

    const dispatch = usePopupStateDispatch()

    var paginatedArray = DetermineItems(
        ITEM_PER_PAGINATION,
        Popups,
        paginationSelection,
    )
    return (
        <div
            className={`mb-8 flex flex-row flex-wrap gap-8 w-fit justify-center`}
        >
            {paginatedArray.map((o: any) => (
                <a href={o.isAvailable ? "/popupgenerator#preview" : void 0}>
                    <div
                        key={o.id}
                        className={`flex justify-center items-center w-72 h-52 relative ${
                            o.isAvailable
                                ? "cursor-pointer bg-paginations"
                                : "cursor-not-allowed bg-paginations"
                        }`}
                        onClick={
                            o.isAvailable
                                ? () => {
                                      popupSelectionSet(o.id)
                                      dispatch({
                                          type: "select_another_popup",
                                          payload: o.id,
                                      })
                                  }
                                : undefined
                        }
                        onMouseEnter={(e) => setHoveredPopupListItemId(o.id)}
                        onMouseLeave={(e) => setHoveredPopupListItemId(0)}
                    >
                        {o.isAvailable == undefined ? (
                            <CoverPopupListItem
                                key={o.id}
                                isAvailable={o.isAvailable}
                            />
                        ) : (
                            (o.id == popupSelection ||
                                o.id == hoveredPopupListItemId) && (
                                <CoverPopupListItem
                                    key={o.id}
                                    isAvailable={o.isAvailable}
                                />
                            )
                        )}
                        <Image
                            alt="alt-text"
                            src={o.path}
                            width={o.width}
                            height={o.height}
                        />
                    </div>
                </a>
            ))}
        </div>
    )
}

export default PopupList
