// Declare function

function add3(first: number, second: number): number {
    return first + second;
}

const addNum = add3(50, 10)

// declare multiFunction

function multiFunc(first: number | string, second: number | string) {
    // return first + second; // not recomaned when it is a string 
}

const multiFunction = multiFunc(50, '50')


// when we do not want to return in funtion

function doubleConsole(first: number): void {
    console.log(2 * first);
    // return first;
}