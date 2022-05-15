import React from 'react'
import {CustomTable} from './exports'
import {Box, Container} from '@mui/material'

function App() {
    return (
        <Container maxWidth='lg'>
            <Box py={3}>
                <CustomTable/>
            </Box>
        </Container>
    )
}

export default App