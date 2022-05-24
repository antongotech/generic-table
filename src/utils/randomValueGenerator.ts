const randomStrings = [
    'Random string 1',
    'Random string 2',
    'Random string 3',
    'Random string 4',
    'Random string 5',
]

const randomValueGenerator = (type: string) => {
    switch (type) {
        case 'String':
            return randomStrings[Math.floor(Math.random() * (randomStrings.length))]
        case 'Number':
            return Math.floor(Math.random() * (100 - 1) + 1)
        case 'Boolean':
            return Math.floor(Math.random() * (100 - 1) + 1) % 2 === 0
        case 'Date':
            const date = new Date
            return date.toString()
        default:
            return 'Wrong data format'
    }
}

export default randomValueGenerator