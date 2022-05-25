import React, {useContext} from 'react'
import {Paper, Table, TableContainer,} from '@mui/material'
import {TableContent, TableToolbar, TableTop} from '../../exports'
import {StateContext} from '../../context/StateContext'


const CustomTable: React.FC<{ onDelete: Function }> = ({onDelete}) => {
    const {state: {tableItems, selected}} = useContext(StateContext)

    return (
        <TableContainer component={Paper}>
            <TableToolbar selectedItems={selected.length} onDelete={onDelete}/>
            <Table sx={{minWidth: 650}} aria-label="generic table">
                <TableTop/>
                <TableContent tableData={tableItems}/>
            </Table>
        </TableContainer>
    )
}

export default CustomTable