import React, {useContext} from 'react'
import {Checkbox} from '@mui/material'
import {StateContext} from '../../context/StateContext'

const CustomCheckbox: React.FC<{ id: string | undefined }> =
    ({id}) => {
        const {state, updateState} = useContext(StateContext)

        const currentItem = state.tableItems.filter((item) => item.id === id)

        return <Checkbox
            checked={currentItem[0].selected}
            onChange={() => {
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

            }}
            inputProps={{'aria-label': 'controlled'}}
        />
    }

export default CustomCheckbox