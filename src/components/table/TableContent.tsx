import React from 'react'
import {TableBody, Typography} from '@mui/material'
import {CustomRow, ITableItem} from '../../exports'
import {Droppable} from 'react-beautiful-dnd'

const TableContent: React.FC<{ tableData: ITableItem[] }> = ({tableData}) => {
    return (
        <Droppable droppableId='tableItems'>
            {(provided) => (
                <TableBody
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {tableData.map((item: ITableItem, index: number) => (
                        item.show && <CustomRow
                            key={item.id}
                            index={index}
                            id={item.id}
                            internalState={item.selected}
                            value={item.value}
                            type={item.type}
                        />
                    ))}
                    {provided.placeholder}
                    {!tableData.length && <div style={{minHeight: 75}}>
                        <Typography variant='body2' color='text.secondary'>Drag items to add...</Typography>
                    </div>
                    }
                </TableBody>
            )}
        </Droppable>
    )
}

export default TableContent