import React, {useEffect, useState} from 'react'
import {CustomTable, data, ICellType, ITableItem, onAdd, onFilterUpdate, onSwap, Sidebar} from './exports'
import {Container, Grid} from '@mui/material'
import {DragDropContext} from 'react-beautiful-dnd'

const App = () => {
    const [state, setState] = useState(data)

    const [selected, setSelected] = useState<string[]>([])

    useEffect(() => {
        const filters = state.cellTypes

        const items = state.tableItems

        let filteredItems: any[] = []

        items.map((item) => {
            filters.filter((filter) => {
                if (item.type === filter.type) {
                    filteredItems.push({...item, show: filter.checked})
                }
            })
        })

        const updatedState = {
            ...state,
            tableItems: [...filteredItems]
        }

        setState(updatedState)

    }, [state.cellTypes])

    const onSelect = (itemId?: string, all?: boolean) => {

        all && setSelected(state.tableItems.map((item) => item.id))

        if (!itemId) return

        setSelected(prevState => [...prevState.filter((item) => item !== itemId), itemId])
    }
    const onDelete = () => {
        let updatedTable: ITableItem[] = []

        state.tableItems.map((item, i) => {
            let add = true
            selected.filter((sel) => {
                if (sel === item.id) {
                    add = false
                }
            })
            add && updatedTable.push(item)
        })

        const updatedState = {
            ...state,
            tableItems: [...updatedTable]
        }

        setState(updatedState)
        setSelected([])
    }

    const onFiltersChange = (toggled: ICellType) => {
        const updatedFilters = onFilterUpdate(state, toggled)

        const updatedState = {
            ...state,
            cellTypes: [...updatedFilters]
        }

        setState(updatedState)
    }

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
            <DragDropContext onDragEnd={onDrag}>
                <Grid container spacing={5} py={5}>
                    <Grid item xs={3}>
                        <Sidebar state={state} onFiltersChange={onFiltersChange}/>
                    </Grid>
                    <Grid item xs={9}>
                        <CustomTable onDelete={onDelete} selected={selected} setSelected={onSelect} state={state}/>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Container>
    )
}

export default App