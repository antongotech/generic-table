import {IRow, randomValueGenerator} from './exports'

const initialData = {
    cellTypes: {
        "String": {id: "String", type: "String"},
        "Number": {id: "Number", type: "Number"},
        "Boolean": {id: "Boolean", type: "Boolean"},
        "Date": {id: "Date", type: "Date"},
    },
    tableItems: {
        "item-1": {id: "item-1", type: 'String', value: randomValueGenerator('String')},
        "item-2": {id: "item-2", type: 'String', value: randomValueGenerator('String')},
        "item-3": {id: "item-3", type: 'Number', value: randomValueGenerator('Number')},
        "item-4": {id: "item-4", type: 'String', value: randomValueGenerator('String')},
        "item-5": {id: "item-5", type: 'Number', value: randomValueGenerator('Number')},
    },

    lists: {
        'cellTypes': {
            id: 'cellTypes',
            title: 'Available Cell Types',
            listIds: ["String", "Number", "Boolean", "Date"]
        },
        'tableItems': {
            id: 'tableItems',
            title: 'Table Items',
            listIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5',]
        }
    },

    listsOrder: ['cellTypes', 'tableItems'],
}

export default initialData