import {ICellType, IData} from '../exports'

const onFilterUpdate = (state: IData, type: ICellType) => {

    const updatedSort = state.cellTypes.map((item) => {
            const currentItem = item
            if (item.type === type.type) {
                currentItem.checked = !currentItem.checked
            }
            return currentItem
        })

    return updatedSort
}

export default onFilterUpdate