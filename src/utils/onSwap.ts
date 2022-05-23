import {IData, ITableItem} from '../exports'

const onSwap = (state: IData, listName: string, expectedPosition: number, prevPosition: number, itemId: string) => {

    // @ts-ignore
    const swappedItems = state[listName]

    const draggableItems = swappedItems.filter((item: ITableItem) => item.id === itemId)

    swappedItems.splice(prevPosition, 1)
    swappedItems.splice(expectedPosition, 0, ...draggableItems)

    return swappedItems
}

export default onSwap