// For a given array of price of items, you have to calculate the sum and average of all prices upto 2 decimal places.

// For a single testcase and without user input
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let addPrices = function (arraySize, array) {
    console.log(array.reduce(reducer, 0) + " " + (array.reduce(reducer, 0) / arraySize).toFixed(2));

}

addPrices(6, [1, 2, 3, 5, 6])
// Output: 21 3.50

// For multiple testcases and with user input
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let addPrices = function () {
    let testcases = 0;
    let arraySize = 0;
    testcases = prompt("Enter the no. of test cases", testcases);
    for (let i = 0; i < testcases; i++) {
        arraySize = prompt("Enter array size", arraySize);
        let array = prompt("Enter elements").split(' ');
        var result = array.map((x) => +x);
        console.log(result.reduce(reducer, 0) + " " + (result.reduce(reducer, 0) / arraySize).toFixed(2));
    }
}


// Output:
// Enter Enter the no. of test cases : 2
// Enter array size: 5
// Enter elements: 1 2 3 4 5
// Result - 15 3.00
// Enter array size: 6
// Enter elements: 1 2 3 4 5 6
// Result - 21 3.50