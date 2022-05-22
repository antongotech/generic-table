import React, {useEffect, useState} from 'react'
import {CustomTable, data, randomValueGenerator, Sidebar} from './exports'
import {Container, Grid, Typography} from '@mui/material'
import {DragDropContext} from 'react-beautiful-dnd'

function App() {
    const [state, setState] = useState(data)

    const [types, setTypes] = useState([
        {type: 'Number', checked: true},
        {type: 'String', checked: true},
        {type: 'Boolean', checked: true},
        {type: 'Date', checked: true},
    ])

    useEffect(() => {
        console.log(types)

    }, [types])

    const onDrag = (result: any) => {
        const {destination, source, draggableId} = result

        if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) return

        let column
        let newTaskIds
        let items
        let newState

        if (destination.droppableId !== source.droppableId) {
            // @ts-ignore
            column = state.lists[destination.droppableId]


            const itemName = column.listIds[column.listIds.length - 1]
            const next = parseInt(itemName.split('-')[1]) + 1
            const nextId = itemName.split('-')[0] + '-' + next

            const newObject = {
                [nextId]:
                    {id: nextId, type: draggableId, value: randomValueGenerator(draggableId)},
            }
            items = {
                //@ts-ignore
                ...state[column.id], ...newObject
            }

            newTaskIds = Array.from(column.listIds)
            newTaskIds.push(items[nextId].id)
        } else {
            // @ts-ignore
            column = state.lists[source.droppableId]

            newTaskIds = Array.from(column.listIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)
        }

        const newColumn = {
            ...column,
            listIds: newTaskIds,
        }

        if (items) {
            newState = {
                ...state,
                tableItems: items,
                lists: {
                    ...state.lists,
                    [newColumn.id]: newColumn,
                }
            }
        } else {
            newState = {
                ...state,
                lists: {
                    ...state.lists,
                    [newColumn.id]: newColumn,
                }
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
                        <Sidebar types={types} setTypes={setTypes} state={state}/>
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