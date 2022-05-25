import React, {useContext} from 'react'
import {CustomTable, ICellType, ITableItem, onAdd, onFilterUpdate, onSwap, Sidebar} from './exports'
import {Container, Grid} from '@mui/material'
import {DragDropContext} from 'react-beautiful-dnd'
import {StateContext} from './context/StateContext'

const App = () => {
    const {state, state: {cellTypes, selected, tableItems}, updateState} = useContext(StateContext)

    const filterItems = () => {
        const filters = cellTypes
        const items = tableItems
        const filteredItems: ITableItem[] = []

        items.map((item) => {
            filters.filter((filter) => {
                if (item.type === filter.type) {
                    filteredItems.push({...item, show: filter.checked})
                }
            })
        })

        updateState({
            ...state,
            tableItems: [...filteredItems]
        })
    }

    const onDelete = () => {
        const updatedTable: ITableItem[] = []

        tableItems.map((item) => {
            let add = true
            selected.filter((sel) => {
                if (sel === item.id) {
                    add = false
                }
            })
            add && updatedTable.push(item)
        })

        updateState({
            ...state,
            tableItems: [...updatedTable],
            selected: []
        })
    }

    const onFiltersChange = (toggled: ICellType) => {
        const updatedFilters = onFilterUpdate(state, toggled)

        updateState({
            ...state,
            cellTypes: [...updatedFilters]
        })
        filterItems()
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

        updateState({
            ...state,
            [destination.droppableId]: updatedArray,
        })
    }

    return (
        <Container maxWidth='xl'>
            <DragDropContext onDragEnd={onDrag}>
                <Grid container spacing={5} py={5}>
                    <Grid item xs={3}>
                        <Sidebar onFiltersChange={onFiltersChange}/>
                    </Grid>
                    <Grid item xs={9}>
                        <CustomTable onDelete={onDelete}/>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Container>
    )
}

export default App