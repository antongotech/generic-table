import {ICellType, IFilterType, ITableItem} from '../exports'

interface IData {
    cellTypes: ICellType[]
    tableItems: ITableItem[]
    filters: IFilterType[]
}

export default IData