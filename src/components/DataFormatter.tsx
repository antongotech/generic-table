import {ReactNode} from 'react'
import {CustomCheckbox} from '../exports'

const DataFormatter = (data: ReactNode | Date) => {
    switch (typeof data) {
        case 'number':
            return data
        case 'string':
            return data
        case 'boolean':
            return <CustomCheckbox data={data} />
        case 'object':
            return data ? data.toLocaleString() : 'Empty'
        default:
            return 'Unexpected format'
    }
}

export default DataFormatter