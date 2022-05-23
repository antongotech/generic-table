import React from 'react'
import {Checkbox, Container, FormControlLabel, Typography} from '@mui/material'
import {IData, IFilterType} from '../../exports'

const CellsController: React.FC<{ state: IData, onFiltersChange: Function }> = ({state, onFiltersChange}) => {

    return (
        <Container>
            <Typography variant='h5' gutterBottom textAlign='center'>
                Cells Controller
            </Typography>
            {state.filters.map((type: IFilterType) => <FormControlLabel
                    label={type.type}
                    key={type.type}
                    control={
                        <Checkbox checked={type.checked} onChange={(e) => onFiltersChange(type)}/>}
                />
            )}
        </Container>
    )
}

export default CellsController