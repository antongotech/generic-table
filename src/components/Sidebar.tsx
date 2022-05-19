import React, {useState} from 'react'
import {Typography, Paper, styled} from '@mui/material'
import {CellsController, data} from '../exports'
import {Draggable, Droppable} from 'react-beautiful-dnd'

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    margin: '10px 0',
}))

const Sidebar: React.FC<{ state: any }> = ({state}) => {

    const typesCol = state.lists.cellTypes
    const typesItems = typesCol.listIds.map((item: any) => state.cellTypes[item])

    return (
        <div>
            <Typography variant='h5' gutterBottom textAlign='center'>
                {typesCol.title}
            </Typography>
            <div className='sidebar'>
                <Droppable droppableId={typesCol.id}>
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {typesItems.map((item: any, index: number) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {provided => (
                                        <Item
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {item.type}
                                        </Item>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <CellsController/>
            </div>
        </div>
    )
}

export default Sidebar