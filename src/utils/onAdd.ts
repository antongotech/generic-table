import {IData, ITableItem, randomValueGenerator} from '../exports'

const onAdd = (state: IData, arrayTo: string, arrayFrom: string, expectedPosition: number, itemType: string) => {

    // @ts-ignore
    const items = state[arrayTo]

    const itemsLength = items.length

    const newItem: ITableItem = {
        id: `item-${itemsLength + 1}`,
        type: itemType,
        value: randomValueGenerator(itemType),
        show: true,
    }

    items.splice(expectedPosition, 0, newItem)

    return items
}

export default onAdd