import React, {ChangeEvent} from 'react'
import {Box, Checkbox, Container, FormControlLabel, Grid, Typography} from '@mui/material'

const cells = ['String', 'Boolean', 'Number', 'Date']

const CellsController = () => {
    const [checked, setChecked] = React.useState([true, true, true, true])


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {
        // const newState = [...checked, e.target.checked]
        // setChecked(newState)
    }


    return (
        <Container>
            <Typography variant='h5' gutterBottom textAlign='center'>
                Cells Controller
            </Typography>
            {
                cells.map((cell, i) => (
                    <FormControlLabel
                        key={cell}
                        label={cell}
                        control={
                        <Checkbox checked={checked[i]} onChange={(e) => handleChange(e, i)}/>}
                    />
                ))
            }

        </Container>
    )
}

export default CellsController