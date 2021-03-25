// Print 1 - 100 without using numbers or loops

const one = +true; // This would return 1 (Unary and Boolean operator)
const zero = +false; // This would return 0 (Unary and Boolean operator)
const hundredString = one.toString() + zero.toString() + zero.toString(); // Get 100 in string

const printNumbers = (number) => {
    if (number <= parseInt(hundredString)) {
        console.log(number);
        printNumbers(number + one);
    }
}

printNumbers(one);