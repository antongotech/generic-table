import React, {useState} from 'react'
import {Checkbox} from '@mui/material'

const CustomCheckbox: React.FC<{ data: boolean }> = ({data}) => {
    const [state, setState] = useState(data)
    return <Checkbox
        checked={state}
        onChange={() => setState(prevState => !prevState)}
        inputProps={{'aria-label': 'controlled'}}
    />
}

export default CustomCheckbox