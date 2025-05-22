const userInput = prompt("Введите любое число:");
const number = Number(userInput);

if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
    const arr = [];
    for (let i = 0; i <= number; i++) {
        arr.push(i);
    }
    
    console.log(arr);
} else {
    console.log("Пожалуйста, введите корректное неотрицательное целое число.");
}
