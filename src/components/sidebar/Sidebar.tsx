import React from 'react'
import {Typography} from '@mui/material'
import {CellsController, ICellType, IData, SidebarItem} from '../../exports'
import {Draggable, Droppable} from 'react-beautiful-dnd'

const Sidebar: React.FC<{ state: IData, onFiltersChange: Function }> = ({state, onFiltersChange}) => {

    return (
        <div>
            <div className='sidebar'>
                <Droppable droppableId='cellTypes'>
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <Typography color='text.secondary' variant='h6' gutterBottom textAlign='center'>
                                Available Cells
                            </Typography>
                            {state.cellTypes.map((item: ICellType, index: number) => {
                                return item.checked
                                    ? <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                    : <SidebarItem>
                                        {item.type}
                                    </SidebarItem>
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <CellsController state={state} onFiltersChange={onFiltersChange}/>
            </div>
        </div>
    )
}

export default Sidebar