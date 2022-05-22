import React from 'react'
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from '@mui/material'
import {CustomRow, GenericCell} from '../../exports'
import {Droppable} from 'react-beautiful-dnd'

const headers = ['Select', 'Position', 'Type', 'Value']

const CustomTable: React.FC<{ state: any }> = ({state}) => {

    const tableCol = state.lists.tableItems
    const tableItems = tableCol.listIds.map((item: any) => state.tableItems[item])

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="generic table">
                <TableHead>
                    <TableRow>
                        {
                            headers.map((col) => col === 'Value'
                                ? <GenericCell key={col} data={col}/>
                                : col === 'Select'
                                    ? <GenericCell key={col} heading data={col}/>
                                    : <GenericCell key={col} heading data={col}/>
                            )
                        }
                    </TableRow>
                </TableHead>
                <Droppable droppableId={tableCol.id}>
                    {(provided) => (
                        <TableBody
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tableItems.map((item: any, index: number) => (
                                <CustomRow
                                    key={item.id}
                                    index={index}
                                    id={item.id}
                                    value={item.value}
                                    type={item.type}
                                />
                            ))}
                            {provided.placeholder}
                        </TableBody>
                    )}
                </Droppable>
            </Table>
        </TableContainer>
    )
}

export default CustomTable