import {IData, randomValueGenerator} from './exports'

const initialData: IData = {
    cellTypes: [
        {id: 'String', type: 'String', checked: true},
        {id: 'Number', type: 'Number', checked: true},
        {id: 'Boolean', type: 'Boolean', checked: true},
        {id: 'Date', type: 'Date', checked: true},
    ],
    tableItems: [
        {id: 'item-1', type: 'String', value: randomValueGenerator('String'), show: true, selected: false},
        {id: 'item-2', type: 'Date', value: randomValueGenerator('Date'), show: true, selected: false},
        {id: 'item-3', type: 'Number', value: randomValueGenerator('Number'), show: true, selected: false},
        {id: 'item-4', type: 'String', value: randomValueGenerator('String'), show: true, selected: false},
        {id: 'item-5', type: 'Number', value: randomValueGenerator('Number'), show: true, selected: false},
        {id: 'item-6', type: 'String', value: randomValueGenerator('String'), show: true, selected: false},
        {id: 'item-7', type: 'Boolean', value: randomValueGenerator('Boolean'), show: true, selected: false},
    ],
}

export default initialData