interface player {
    name: string,
    age: number,
    salary: number,
    club?: string[],
    wife?: boolean
}

interface playerCity extends player {
    City: string,
}

const messey: player = {
    name: 'messey',
    age: 25,
    salary: 12000,
    club: ['barca', 'PSG'],
    wife: true,
}

const fathekarim: playerCity = {
    name: 'fathe',
    age: 21,
    salary: 1000,
    City: 'BD'
}