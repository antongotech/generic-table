interface IRow {
    id: string
    type: string
    value: string | number | boolean | Date
    index: number
    setSelected: Function
}

export default IRow