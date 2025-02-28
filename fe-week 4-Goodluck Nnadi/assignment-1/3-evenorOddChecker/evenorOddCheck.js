let numbers = [7, 4];

checkEvenOdd(numbers[0]); 
checkEvenOdd(numbers[1]);

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is an Even number.");
    } else {
        console.log(number + " is an Odd number.");
    }
}
