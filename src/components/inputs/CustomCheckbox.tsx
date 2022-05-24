import React, {useEffect, useState} from 'react'
import {Checkbox} from '@mui/material'

const CustomCheckbox: React.FC<{ id: string | undefined, selected: string[] | undefined, setSelected: Function | undefined }> =
    ({id, setSelected, selected}) => {
        const [state, setState] = useState<boolean>(false)

        useEffect(() => {
            selected?.map((item) => {
                item === id && setState(true)
                !selected?.length && setState(false)
            })
        }, [selected])

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