import {createContext, useEffect, useState} from 'react'
import {IData} from '../exports'

const state: IData = {
    cellTypes: [
        {id: 'String', type: 'String', checked: true},
        {id: 'Number', type: 'Number', checked: true},
        {id: 'Boolean', type: 'Boolean', checked: true},
        {id: 'Date', type: 'Date', checked: true},
    ],
    tableItems: [
        {id: 'item-1', type: 'String', value: 'String 1', show: true, selected: false},
        {id: 'item-2', type: 'Date', value: 'date', show: true, selected: false},
        {id: 'item-3', type: 'Number', value: 23, show: true, selected: false},
        {id: 'item-4', type: 'String', value: 'sad', show: true, selected: false},
        {id: 'item-5', type: 'Number', value: 14, show: true, selected: false},
        {id: 'item-6', type: 'String', value: 'sd', show: true, selected: false},
        {id: 'item-7', type: 'Boolean', value: true, show: true, selected: false},
    ],
    selected: [],
}

export const StateContext = createContext({
    state,
    updateState: (state: IData) => {
    },
})

const StateContextWrapper = (props: any) => {
    const [newState, setNewState] = useState(state)

    useEffect(() => {
        console.log('context updated:', newState)
    }, [newState])

    const updateState = (newState: IData) => {
        setNewState(newState)
    }

    return (
        <StateContext.Provider value={{state: newState, updateState}}>
            {props.children}
        </StateContext.Provider>
    )
}


export default StateContextWrapper