import React from 'react'
import {Box, Checkbox, Container, FormControlLabel, Typography} from '@mui/material'
import {ICellType} from '../../exports'

const CellsController: React.FC<{ cellTypes: ICellType[], onFiltersChange: Function }> =
    ({cellTypes, onFiltersChange}) => {

        return (
            <Container>
                <Typography variant='h6' color='text.secondary' gutterBottom textAlign='center'>
                    Filters
                </Typography>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    {cellTypes.map((type: ICellType) => <FormControlLabel
                            sx={{color: 'text.secondary'}}
                            label={type.type}
                            key={type.type}
                            control={
                                <Checkbox checked={type.checked} onChange={(e) => onFiltersChange(type)}/>}
                        />
                    )}
                </Box>
            </Container>
        )
    }

export default CellsController