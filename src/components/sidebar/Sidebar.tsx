import React from 'react'
import {Typography} from '@mui/material'
import {CellsController, SidebarItem} from '../../exports'
import {Draggable, Droppable} from 'react-beautiful-dnd'

const Sidebar: React.FC<{ state: any}> = ({state}) => {

    return (
        <div>
            <Typography variant='h5' gutterBottom textAlign='center'>
                Available Cells
            </Typography>
            <div className='sidebar'>
                <Droppable droppableId='cellTypes'>
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {state.cellTypes.map((item: any, index: number) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {provided => (
                                        <SidebarItem
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {item.type}
                                        </SidebarItem>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <CellsController />
            </div>
        </div>
    )
}

export default Sidebar