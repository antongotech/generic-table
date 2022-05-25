import React from 'react'
import {TableCell} from '@mui/material'

const CellHeading:React.FC<{data: string}> = ({data}) => {
    return (
        <TableCell sx={{width: '10vw'}} component='th' scope='row'>{data}</TableCell>
    )
}

export default CellHeading