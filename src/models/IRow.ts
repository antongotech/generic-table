interface IRow {
    id: string
    type: string
    value: string | number | boolean | Date
    index: number
    selected: string[]
    setSelected: Function
    internalState? : boolean
}

export default IRow