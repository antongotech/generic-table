import React from 'react'
import {TableHead, TableRow} from '@mui/material'
import {GenericCell} from '../../exports'

const headers = ['Select', 'Position', 'Type', 'Value']

const TableTop = () => {
    return (
        <TableHead>
            <TableRow>
                {headers.map((header) =>
                    <GenericCell
                        key={header}
                        heading={header !== 'Value'}
                        data={header}
                    />
                )}
            </TableRow>
        </TableHead>
    )
}

export default TableTop