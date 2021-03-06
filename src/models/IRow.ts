interface IRow {
    id: string
    type: string
    value: string | number | boolean | Date
    index: number
    internalState? : boolean
}

export default IRow