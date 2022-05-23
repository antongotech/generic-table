import React, {useState} from 'react'
import {Checkbox} from '@mui/material'

const CustomCheckbox: React.FC<{ id: string | undefined, data: boolean, setSelected: Function | undefined }> = ({id, data, setSelected}) => {
    const [state, setState] = useState(data)

    return <Checkbox
        checked={state}
        onChange={() => {
            setState(prevState => !prevState)
            setSelected && setSelected(id)
        }}
        inputProps={{'aria-label': 'controlled'}}
    />
}

export default CustomCheckbox