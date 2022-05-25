import React from 'react'
import {TableCell} from '@mui/material'

const CellDefault:React.FC<{data: string}> = ({data}) => {
    return (
        <TableCell sx={{width: '80vw'}} align='right'>{data}</TableCell>
    )
}

export default CellDefault