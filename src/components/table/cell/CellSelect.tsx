import React, {useContext} from 'react'
import {Checkbox, TableCell} from '@mui/material'
import {StateContext} from '../../../context/StateContext'

const CellSelect = () => {
    const {state, updateState} = useContext(StateContext)

    return (
        <TableCell>
            <Checkbox
                checked={!!state.selected?.length}
                color='secondary'
                onClick={() => {
                    if (state.selected.length === state.tableItems.length) {
                        const resetSelected: string[] = []
                        const resetItems = state.tableItems.map((item) => {
                            const newObj = {...item, selected: false}
                            return newObj
                        })

                        updateState({
                            ...state,
                            selected: resetSelected,
                            tableItems: resetItems
                        })
                        return
                    }

                    const updatedItems = state.tableItems.map((item) => state.tableItems.length ? {
                        ...item,
                        selected: true
                    } : {...item, selected: false})

                    const selectedArr = updatedItems.filter((item) => item.selected).map((item) => item.id)

                    const newState = {
                        ...state,
                        selected: selectedArr,
                        tableItems: updatedItems
                    }

                    updateState(newState)
                }}
                inputProps={{
                    'aria-label': 'select all',
                }}
            />
        </TableCell>
    )
}

export default CellSelect