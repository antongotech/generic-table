import React, {useContext} from 'react'
import {CustomTable, ICellType, ITableItem, onAdd, onFilterUpdate, onSwap, Sidebar} from './exports'
import {Container, Grid} from '@mui/material'
import {DragDropContext} from 'react-beautiful-dnd'
import {StateContext} from './context/StateContext'

const App = () => {
    const {state, updateState} = useContext(StateContext)

    const filterItems = () => {
        const filters = state.cellTypes

        const items = state.tableItems

        let filteredItems: ITableItem[] = []

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

        updateState(updatedState)
    }

    const onSelect = (itemId?: string, all?: boolean) => {
        let toggle

        if (!itemId && !all) return

        if (all) {
            updateState({
                ...state,
                selected: state.selected.length === state.tableItems.length ? [] : state.tableItems.map((item) => item.id)
            })
            return
        }

        state.selected.map((item) => {
            if (item === itemId) {
                toggle = true
                const updatedSelects = [...state.selected.filter((i) => i !== itemId)]
                updateState({...state, selected: updatedSelects})
            }
        })

        if (toggle) return

        itemId && updateState({...state, selected: [...state.selected.filter((item) => item !== itemId), itemId]})
    }
    const onDelete = () => {
        let updatedTable: ITableItem[] = []

        state.tableItems.map((item, i) => {
            let add = true
            state.selected.filter((sel) => {
                if (sel === item.id) {
                    add = false
                }
            })
            add && updatedTable.push(item)
        })

        const updatedState = {
            ...state,
            tableItems: [...updatedTable],
            selected: [],
        }

        updateState(updatedState)
    }

    const onFiltersChange = (toggled: ICellType) => {
        const updatedFilters = onFilterUpdate(state, toggled)

        const updatedState = {
            ...state,
            cellTypes: [...updatedFilters]
        }

        updateState(updatedState)
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

        const updatedState = {
            ...state,
            [destination.droppableId]: updatedArray,
        }
        updateState(updatedState)
    }

    return (
        <Container maxWidth='xl'>
            <DragDropContext onDragEnd={onDrag}>
                <Grid container spacing={5} py={5}>
                    <Grid item xs={3}>
                        <Sidebar onFiltersChange={onFiltersChange}/>
                    </Grid>
                    <Grid item xs={9}>
                        <CustomTable onSelect={onSelect} onDelete={onDelete}/>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Container>
    )
}

export default App