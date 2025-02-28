let numbers = [10, 20, 30, 40, 50];

// Function to add a number to the array
function addNumber(num) {
    numbers.push(num);
    console.log("Added", num, ":", numbers);
}


function removeLastNumber() {
    let removed = numbers.pop();
    console.log("Removed", removed, ":", numbers);
}

   
let together = [10, 15, 20, 25, 30];

let sum = 0; 

together.forEach(num => {
    sum += num;
});



addNumber(60);
removeLastNumber();
console.log("Sum of numbers:", sum);
