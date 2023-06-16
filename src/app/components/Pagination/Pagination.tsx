"use client"

import React from "react"
import { usePaginationCount } from "../../context/PaginationCount"
import { usePaginationSelection, usePaginationSelectionSet } from "../../context/PaginationSelection"

export const Pagination: React.FC = () => {
    const paginationCount: number = usePaginationCount()
    const paginationSelection = usePaginationSelection()
    const paginationSelectionSet = usePaginationSelectionSet()
    // console.log(paginationSelection, "pagination selection")
    return (
        <>
            <div className="flex flex-row gap-x-1 bg-paginations w-fit rounded-xl p-1">
                {Array.from({ length: paginationCount }, (_, i) => (
                    <span
                        data-test-id={"pagination-item-" + (i + 1)}
                        key={i + 1}
                        className={`w-11 h-11 flex justify-center items-center rounded-lg hover:bg-white hover:cursor-pointer ${paginationSelection == i + 1 ? 'bg-white' : ''}`}
                        onClick={() => paginationSelectionSet(i + 1)}
                    >
                        {i + 1}
                    </span>
                ))}
            </div>
        </>
    )
}
