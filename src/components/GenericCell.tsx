import React from 'react'
import {TableCell} from '@mui/material'
import {DataFormatter, ICell} from '../exports'

const GenericCell: React.FC<ICell> = ({heading, data}) => {
    const formattedData = DataFormatter(data)
    return (
        <>
            {
                heading
                    ? <TableCell component="th" scope="row">{formattedData}</TableCell>
                    : <TableCell align="right">{formattedData}</TableCell>
            }
        </>
    )
}

export default GenericCell