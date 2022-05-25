import React from 'react'
import {CustomCheckbox} from '../../../exports'
import {TableCell} from '@mui/material'

const CellCheckbox: React.FC<{ id: string }> = ({id}) => {
    return (
        <TableCell sx={{width: '10vw'}}>
            <CustomCheckbox id={id}/>
        </TableCell>
    )
}

export default CellCheckbox