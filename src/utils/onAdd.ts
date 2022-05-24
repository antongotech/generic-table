import {IData, ITableItem, randomValueGenerator} from '../exports'

const onAdd = (state: IData, arrayTo: string, arrayFrom: string, expectedPosition: number, itemType: string) => {

    // @ts-ignore
    const items = state[arrayTo]

    let maxIndex = parseInt(state.tableItems[0]?.id) || 0

    items.forEach((item: ITableItem) => {
        const itemIndex = item.id.indexOf('-')
        const indexValue = parseInt(item.id.substring(itemIndex + 1))
        if (maxIndex < indexValue) maxIndex = indexValue
    })

    const newItem: ITableItem = {
        id: `item-${maxIndex + 1}`,
        type: itemType,
        value: randomValueGenerator(itemType),
        show: true,
        selected: false,
    }

    items.splice(expectedPosition, 0, newItem)

    return items
}

export default onAdd