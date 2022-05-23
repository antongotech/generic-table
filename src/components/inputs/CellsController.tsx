import React from 'react'
import {Checkbox, Container, FormControlLabel, Typography} from '@mui/material'

const CellsController: React.FC = () => {
    return (
        <Container>
            <Typography variant='h5' gutterBottom textAlign='center'>
                Cells Controller
            </Typography>
            {/*{types.map((type: any) => <FormControlLabel*/}
            {/*        label={type.type}*/}
            {/*        key={type.type}*/}
            {/*        control={*/}
            {/*            <Checkbox checked={type.checked} onChange={(e) =>*/}
            {/*                setTypes((prevState: any[]) => [...prevState.filter((i) => i.type !== type.type), {*/}
            {/*                    type: type.type,*/}
            {/*                    checked: !type.checked*/}
            {/*                }])}/>}*/}
            {/*    />*/}
            {/*)}*/}
        </Container>
    )
}

export default CellsController