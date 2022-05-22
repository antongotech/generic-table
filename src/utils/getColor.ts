const getColor = (data: string) => {
    switch (data) {
        case 'String':
            return 'primary'
        case 'Number':
            return 'warning'
        case 'Boolean':
            return 'success'
        default:
            return 'secondary'
    }
}

export default getColor