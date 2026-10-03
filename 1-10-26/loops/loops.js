function showResult(id, message) {
    console.log(message)
    let result = document.getElementById(id)
    result.innerText = message
    result.style.display = "block"
}

//#1.Find the sum of digits in a given number.Example: 738 → 7 + 3 + 8 = 18
function sumOfDigits() {
    let num = parseInt(document.getElementById("num1").value);
    let sum = 0;
    while (num > 0) {
        let a = num % 10;
        sum += a;
        num = Math.floor(num / 10);
    }
    showResult("result1", `The sum of digits in the given number is ${sum}`);
}

//sum of the natural numbers from 1 to n
function sumOfNaturalNumbers() {
    let n = parseInt(document.getElementById("num2").value);
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    showResult("result2", `The sum of natural numbers from 1 to ${n} is ${sum}`);
}

//#3.Find the sum of the first digit and the last digit of a given number.Example: 936 → 9 + 6 = 15
function sumOfFirstAndLastDigit() {
    let num = parseInt(document.getElementById("num3").value);
    let sum = 0;
    let i = 0;
    while (num > 0) {
        let a = num % 10;
        if (i == 0) {
            sum += a;
        }
        if (num < 10) {
            sum += a;
        }
        num = Math.floor(num / 10);
        i++;
    }
    showResult("result3", `The sum of the first and last digit of the given number is ${sum}`);
}

// difference between even and odd number sums in range 1 to n
function differenceBetweenEvenAndOdd() {
    let n = parseInt(document.getElementById("num4").value);
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    let difference = evenSum - oddSum;
    showResult("result4", `The difference between the sum of even and odd numbers from 1 to ${n} is ${difference}`);
}

// #4.Find the average of digits that are divisible by 5 in a given number.
// # Example: 12575 → Divisible by 5 digits: 5, 5, 5 → Average = (5 + 5 + 5) / 3 = 5
function averageOfDigitsDivisibleBy5() {
    let num = parseInt(document.getElementById("num5").value);
    let sum = 0;
    let count = 0;
    while (num > 0) {
        let a = num % 10;
        if (a % 5 == 0) {
            sum += a;
            count++;
        }
        num = Math.floor(num / 10);
    }
    let average = count === 0 ? 0 : sum / count;
    showResult("result5", `The average of digits that are divisible by 5 in the given number is ${average}`);
}

//#5.Find the average of digits in a given number.Example: 624 → (6 + 2 + 4) / 3 = 4
function averageOfDigits() {
    let num = parseInt(document.getElementById("num6").value);
    let sum = 0;
    let count = 0;
    while (num > 0) {
        let a = num % 10;
        sum += a;
        count++;
        num = Math.floor(num / 10);
    }
    let average = count === 0 ? 0 : sum / count;
    showResult("result6", `The average of digits in the given number is ${average}`);
}

//check given prime or not
function isPrime() {
    let num = parseInt(document.getElementById("num7").value);
    if (num <= 1) {
        showResult("result7", `${num} is not a prime number`);
        return;
    }
    let divisorCount = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisorCount++;
        }
    }
    const message = divisorCount == 2
        ? `${num} is a prime number`
        : `${num} is not a prime number`;
    showResult("result7", message);
}

//#Leap Years in a Range(Not Nested Loop Logic) Print all leap years between the given years.
function printLeapYears() {
    let startYear = parseInt(document.getElementById("startYear").value);
    let endYear = parseInt(document.getElementById("endYear").value);
    let leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }
    showResult("result8", `Leap years between ${startYear} and ${endYear}: ${leapYears.join(", ")}`);
}
