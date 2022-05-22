import React from 'react'
import {Typography} from '@mui/material'
import {CellsController, SidebarItem} from '../../exports'
import {Draggable, Droppable} from 'react-beautiful-dnd'

const Sidebar: React.FC<{ state: any, types: any, setTypes: Function }> = ({state, types, setTypes}) => {

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
                <CellsController types={types} setTypes={setTypes}/>
            </div>
        </div>
    )
}

export default Sidebar