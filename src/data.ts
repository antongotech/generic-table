import {randomValueGenerator} from './exports'

const initialData = {
    cellTypes: {
        'String': {id: 'String', type: 'String'},
        'Number': {id: 'Number', type: 'Number'},
        'Boolean': {id: 'Boolean', type: 'Boolean'},
        'Date': {id: 'Date', type: 'Date'},
    },
    tableItems: {
        'item-1': {id: 'item-1', type: 'String', value: randomValueGenerator('String')},
        'item-2': {id: 'item-2', type: 'Date', value: randomValueGenerator('Date')},
        'item-3': {id: 'item-3', type: 'Number', value: randomValueGenerator('Number')},
        'item-4': {id: 'item-4', type: 'String', value: randomValueGenerator('String')},
        'item-5': {id: 'item-5', type: 'Number', value: randomValueGenerator('Number')},
        'item-6': {id: 'item-6', type: 'String', value: randomValueGenerator('String')},
        'item-7': {id: 'item-7', type: 'Boolean', value: randomValueGenerator('Boolean')},
    },
    lists: {
        'cellTypes': {
            id: 'cellTypes',
            title: 'Available Cells',
            listIds: ['String', 'Number', 'Boolean', 'Date']
        },
        'tableItems': {
            id: 'tableItems',
            title: 'Table Items',
            listIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7']
        }
    },

    listsOrder: ['cellTypes', 'tableItems'],
}

export default initialData