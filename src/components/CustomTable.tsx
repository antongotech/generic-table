import React from 'react'
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from '@mui/material'
import {GenericCell, data} from '../exports'

const CustomTable = () => {
    const {rows, cols} = data

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="generic table">
                <TableHead>
                    <TableRow>
                        {
                            cols.map((col) => col === 'String'
                                ? <GenericCell key={col} heading data={col}/>
                                : <GenericCell key={col} data={col}/>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.str}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <GenericCell heading data={row.str}/>
                            <GenericCell data={row.num}/>
                            <GenericCell data={row.bool}/>
                            <GenericCell data={row.date}/>
                            <GenericCell data={row.other}/>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable