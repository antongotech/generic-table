import {ReactNode} from 'react'

interface ICell {
    data: ReactNode | Date
    heading?: boolean
    chip?: boolean
    id?: string
    internalState? :boolean
}

export default ICell