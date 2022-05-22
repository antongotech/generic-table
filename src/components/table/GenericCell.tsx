import React from 'react'
import {Chip, TableCell} from '@mui/material'
import {Colors, CustomCheckbox, getColor, ICell} from '../../exports'

const GenericCell: React.FC<ICell> = ({heading, data, chip}) => {
    const formattedData = data?.toString() || ''

    if (formattedData === 'checkbox')
        return <TableCell sx={{width: '10vw'}}> <CustomCheckbox data={false}/></TableCell>

    if (chip)
        return <TableCell sx={{width: '10vw'}} component="th" scope="row">
            <Chip label={formattedData} color={getColor(formattedData) as Colors || 'info'} variant="outlined"/>
        </TableCell>

    if (heading) return <TableCell sx={{width: '10vw'}} component="th" scope="row">{formattedData}</TableCell>

    return (
        <TableCell sx={{width: '80vw'}} align="right">{formattedData}</TableCell>
    )
}

export default GenericCell