import {ReactNode} from 'react'

interface ICell {
    data: ReactNode | Date
    heading?: boolean
    chip?: boolean
    setSelected?: Function
    id?: string
}

export default ICell