"use strict";
const number = 10;
const numbers = [10, 20, 30, 105];
numbers.push(100);
numbers[1] = 10;
// numbers[1] = '10';
const friendName = 'fathe';
const friendsName = ['fathe', 'karim'];
// loop
let max = 0;
for (let number of numbers) {
    if (number > max) {
        max = number;
    }
}
