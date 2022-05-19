import React, {useState} from 'react'
import {CustomTable, data, Sidebar} from './exports'
import {Container, Grid, Typography} from '@mui/material'
import {DragDropContext} from 'react-beautiful-dnd'

function App() {
    const [state, setState] = useState(data)

    const onDrag = (result: any) => {
        const {destination, source, draggableId} = result
        console.log(destination, source, draggableId)

        if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) return

        // @ts-ignore
        const column = state.lists[source.droppableId]
        const newTaskIds = Array.from(column.listIds)

        console.log(newTaskIds)

        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column,
            listIds: newTaskIds,
        }

        const newState = {
            ...state,
            lists: {
                ...state.lists,
                [newColumn.id]: newColumn,
            }
        }
        setState(newState)
    }

    return (
        <Container maxWidth='xl'>
            <DragDropContext
                onDragEnd={onDrag}
            >
                <Grid container spacing={5} py={5}>
                    <Grid item xs={3}>
                        <Sidebar state={state}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant='h5' gutterBottom>Table</Typography>
                        <CustomTable state={state}/>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Container>
    )
}

export default App