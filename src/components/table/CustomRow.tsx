import React from 'react'
import {GenericCell, IRow} from '../../exports'
import {Draggable} from 'react-beautiful-dnd'
import {TableRow} from '@mui/material'

const CustomRow: React.FC<IRow> = ({id, type, value, index, selected, internalState, setSelected}) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <TableRow
                    key={id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <GenericCell internalState={internalState} id={id} selected={selected} setSelected={setSelected} heading data='checkbox'/>
                    <GenericCell heading data={index + 1}/>
                    <GenericCell heading data={type} chip={true}/>
                    <GenericCell data={value}/>
                </TableRow>
            )}
        </Draggable>
    )
}

export default CustomRow