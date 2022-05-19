const randomStrings = [
    'I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.',
    'My mother always used to say: The older you get, the better you get, unless you’re a banana.',
    'I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off.',
    'I never feel more alone than when I’m trying to put sunscreen on my back.',
    'A day without sunshine is like, you know, night.',
]

const randomValueGenerator = (type: string) => {
    switch (type) {
        case 'String':
            return randomStrings[Math.floor(Math.random() * (randomStrings.length))]
        case 'Number':
            return Math.floor(Math.random() * (100 - 1) + 1)
        default:
            return 42
    }
}

export default randomValueGenerator