import {ICellType, ITableItem} from '../exports'

interface IData {
    cellTypes: ICellType[]
    tableItems: ITableItem[]
    selected: string[]
}

export default IData