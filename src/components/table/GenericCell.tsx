import React, {useContext} from 'react'
import {Checkbox, Chip, TableCell} from '@mui/material'
import {Colors, CustomCheckbox, getColor, ICell} from '../../exports'
import {StateContext} from "../../context/StateContext";

const GenericCell: React.FC<ICell> = ({heading, data, chip, id}) => {
    const formattedData = data?.toString() || ''
    const {state, updateState} = useContext(StateContext)

    if (formattedData === 'checkbox')
        return <TableCell sx={{width: '10vw'}}>
            <CustomCheckbox id={id}/>
        </TableCell>

    if (chip)
        return <TableCell sx={{width: '10vw'}} component="th" scope="row">
            <Chip label={formattedData} color={getColor(formattedData) as Colors || 'info'} variant="outlined"/>
        </TableCell>

    if (heading && formattedData !== 'Select')
        return <TableCell sx={{width: '10vw'}} component="th" scope="row">{formattedData}</TableCell>

    if (formattedData === 'Select') {
        return (
            <TableCell>
                <Checkbox
                    checked={!!state.selected?.length}
                    color="secondary"
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

    return (
        <TableCell sx={{width: '80vw'}} align="right">{formattedData}</TableCell>
    )
}

export default GenericCell