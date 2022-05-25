import React from 'react'
import {CellCheckbox, CellChip, CellDefault, CellHeading, CellSelect, ICell} from '../../../exports'

const GenericCell: React.FC<ICell> = ({heading, data, chip, id}) => {
    const formattedData = data?.toString() || ''

    if (formattedData === 'checkbox' && id) return <CellCheckbox id={id}/>

    if (chip) return <CellChip data={formattedData}/>

    if (heading && formattedData !== 'Select') return <CellHeading data={formattedData}/>

    if (formattedData === 'Select') return <CellSelect/>

    return (
        <CellDefault data={formattedData}/>
    )
}

export default GenericCell