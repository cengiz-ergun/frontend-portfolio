export default function DetermineItems(
    numOfItems: number,
    items: object[],
    paginationSelection: number,
): object[] {
    return items.slice(
        (paginationSelection - 1) * numOfItems,
        (paginationSelection - 1) * numOfItems + numOfItems,
    )
}
