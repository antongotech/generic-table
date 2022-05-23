import React from 'react'
import {Checkbox, Chip, TableCell} from '@mui/material'
import {Colors, CustomCheckbox, getColor, ICell} from '../../exports'

const GenericCell: React.FC<ICell> = ({heading, data, chip, setSelected, id}) => {
    const formattedData = data?.toString() || ''

    if (formattedData === 'checkbox')
        return <TableCell sx={{width: '10vw'}}> <CustomCheckbox id={id} setSelected={setSelected} data={false}/></TableCell>

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
                    color="primary"
                    onClick={() => setSelected && setSelected('', true)}
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