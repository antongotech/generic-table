interface ITableItem {
    id: string
    type: string
    value: string | number | boolean
    show: boolean
    selected: boolean
}

export default ITableItem