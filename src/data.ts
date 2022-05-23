import {IData, randomValueGenerator} from './exports'

const initialData: IData = {
    cellTypes: [
        {id: 'String', type: 'String'},
        {id: 'Number', type: 'Number'},
        {id: 'Boolean', type: 'Boolean'},
        {id: 'Date', type: 'Date'},
    ],
    tableItems: [
        {id: 'item-1', type: 'String', value: randomValueGenerator('String'), show: true},
        {id: 'item-2', type: 'Date', value: randomValueGenerator('Date'), show: true},
        {id: 'item-3', type: 'Number', value: randomValueGenerator('Number'), show: true},
        {id: 'item-4', type: 'String', value: randomValueGenerator('String'), show: true},
        {id: 'item-5', type: 'Number', value: randomValueGenerator('Number'), show: true},
        {id: 'item-6', type: 'String', value: randomValueGenerator('String'), show: true},
        {id: 'item-7', type: 'Boolean', value: randomValueGenerator('Boolean'), show: true},
    ],
    filters: [
        {type: 'Number', checked: true},
        {type: 'String', checked: true},
        {type: 'Boolean', checked: true},
        {type: 'Date', checked: true},
    ]
}

export default initialData