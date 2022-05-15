import {dataCreator, IRow} from './exports'

const rows: IRow[] = [
    dataCreator('Frozen yoghurt', 159, true, new Date(), undefined),
    dataCreator('Ice cream sandwich', 253, false, new Date(), null),
    dataCreator('Eclair', 262, true, new Date(), undefined),
    dataCreator('Cupcake', 305, false, new Date(), undefined),
    dataCreator('Gingerbread', 356, false, new Date(), null),
]

const cols = ['String', 'Number', 'Boolean', 'Date', 'Other']

export default {rows, cols}