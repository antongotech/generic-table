import React, {useContext} from 'react'
import {Typography} from '@mui/material'
import {CellsController, ICellType, SidebarItem} from '../../exports'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {StateContext} from "../../context/StateContext";

const Sidebar: React.FC<{ onFiltersChange: Function }> = ({onFiltersChange}) => {
    const {state: {cellTypes}} = useContext(StateContext)

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
                            {cellTypes.map((item: ICellType, index: number) => {
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
                <CellsController cellTypes={cellTypes} onFiltersChange={onFiltersChange}/>
            </div>
        </div>
    )
}

export default Sidebar