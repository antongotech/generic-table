import React, {useContext} from 'react'
import {Checkbox} from '@mui/material'
import {StateContext} from '../../context/StateContext'

const CustomCheckbox: React.FC<{ id: string }> = ({id}) => {
    const {state, updateState} = useContext(StateContext)

    const currentItem = state.tableItems.filter((item) => item.id === id)

    const onToggle = () => {
        currentItem[0].selected = !currentItem[0].selected

        const updatedTable = state.tableItems.filter((item) => {
            return item.id === id ? currentItem[0] : item
        })

        const newState = {
            ...state,
            tableItems: [...updatedTable],
            selected: currentItem[0].selected ? [...state.selected, currentItem[0].id] : [...state.selected]
        }

        updateState(newState)
    }

    return <Checkbox
        checked={currentItem[0].selected}
        onChange={() => onToggle()}
        inputProps={{'aria-label': 'controlled'}}
    />
}

export default CustomCheckbox