import {ReactNode} from 'react'

interface ICell {
    data: ReactNode | Date
    heading?: boolean
    chip?: boolean
}

export default ICell