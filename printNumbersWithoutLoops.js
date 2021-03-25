
// Print 1 - 100 without using numbers or loops

const one = +true;
const zero = +false;
const hundredString = one.toString() + zero.toString() + zero.toString();

const printNumbers = (number) => {
    if (number <= parseInt(hundredString)) {
        console.log(number);
        printNumbers(number + one);
    }
}

printNumbers(one);