function calculateSum(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}


function findMax(numbers) {
    return Math.max(...numbers);
}


function reverseString(str) {
    return str.split('').reverse().join('');
}


function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}


function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}


function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}