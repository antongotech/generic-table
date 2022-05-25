import React from 'react'
import {Chip, TableCell} from '@mui/material'
import {Colors, getColor} from '../../../exports'

const CellChip: React.FC<{ data: string }> = ({data}) => {
    return (
        <TableCell sx={{width: '10vw'}} component='th' scope='row'>
            <Chip label={data} color={getColor(data) as Colors || 'info'} variant='outlined'/>
        </TableCell>
    )
}

export default CellChip