const number: number = 10;
const numbers: number[] = [10, 20, 30, 105]

numbers.push(100)
numbers[1] = 10;
// numbers[1] = '10';

const friendName: string = 'fathe'
const friendsName: string[] = ['fathe', 'karim']




// loop

let max = 0;
for (let number of numbers) {
    if (number > max) {
        max = number
    }
}