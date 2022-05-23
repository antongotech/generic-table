import React, {useEffect, useState} from 'react'
import {CustomTable, data, ITableItem, onAdd, onSwap, randomValueGenerator, Sidebar} from './exports'
import {Container, Grid, Typography} from '@mui/material'
import {DragDropContext} from 'react-beautiful-dnd'

function App() {
    const [state, setState] = useState(data)

    useEffect(() => {
        console.log(state)
    },[state])



    const onDrag = (result: any) => {
        const {destination, source, draggableId} = result
        let updatedArray

        if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) return

        if (destination.droppableId !== source.droppableId) {
            updatedArray = onAdd(state, destination.droppableId, source.droppableId, destination.index, draggableId)
        } else {
            updatedArray = onSwap(state, destination.droppableId, destination.index, source.index, draggableId)
        }

        const updatedState = {
            ...state,
            [destination.droppableId]: updatedArray,
        }
        setState(updatedState)
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
                        <Typography variant='h5' gutterBottom>Table of content</Typography>
                        <CustomTable state={state}/>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Container>
    )
}

export default App