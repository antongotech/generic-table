import {ReactNode} from 'react'

interface ICell {
    data: ReactNode | Date
    heading?: boolean
}

export default ICell