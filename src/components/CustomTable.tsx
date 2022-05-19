import React from 'react'
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from '@mui/material'
import {GenericCell, IRow} from '../exports'
import {Draggable, Droppable} from 'react-beautiful-dnd'

const ListEl: React.FC<IRow> = ({id, type, value, index}) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot, rubric) => (
                <TableRow
                    key={id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <GenericCell heading data={`${index} -${type}`}/>
                    <GenericCell data={value}/>
                </TableRow>
            )}
        </Draggable>
    )
}

const CustomTable: React.FC<{ state: any }> = ({state}) => {
    const tableCol = state.lists.tableItems

    const tableItems = tableCol.listIds.map((item: any) => state.tableItems[item])

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="generic table">
                <TableHead>
                    <TableRow>
                        {
                            ['Type', 'Value'].map((col) => col === 'Type'
                                ? <GenericCell key={col} heading data={col}/>
                                : <GenericCell key={col} data={col}/>)
                        }
                    </TableRow>
                </TableHead>
                <Droppable droppableId='draggableTable'>
                    {(provided) => (
                        <TableBody
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tableItems.map((item: any, index: number) => (
                                <ListEl
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