import {IData, IFilterType} from '../exports'

const onFilterUpdate = (state: IData, type: IFilterType) => {

    const updatedSort = state.filters.map((item) => {
            const currentItem = item
            if (item.type === type.type) {
                currentItem.checked = !currentItem.checked
            }
            return currentItem
        })

    return updatedSort
}

export default onFilterUpdate