import {ReactNode} from 'react'

interface ICell {
    data: ReactNode | Date
    heading?: boolean
    chip?: boolean
    selected?: string[]
    setSelected?: Function
    id?: string
    internalState? :boolean
}

export default ICell