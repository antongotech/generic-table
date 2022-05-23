import {IData, ITableItem, randomValueGenerator} from '../exports'

const onAdd = (state: IData, arrayTo: string, arrayFrom: string, expectedPosition: number, itemType: string) => {
    console.log(arrayFrom, arrayTo, expectedPosition, itemType)

    // @ts-ignore
    const items = state[arrayTo]

    const itemsLength = items.length

    const newItem: ITableItem = {
        id: `item-${itemsLength + 1}`,
        type: itemType,
        value: randomValueGenerator(itemType)
    }

    items.splice(expectedPosition, 0, newItem)

    return items
}

export default onAdd