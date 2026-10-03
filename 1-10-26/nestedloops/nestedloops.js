function showResult(id, message) {
    console.log(message);
    let result = document.getElementById(id);
    result.innerText = message;
    result.style.display = "block";
}

// 1. Sum of Prime Numbers: find the sum of all prime numbers between two numbers.
function sumOfPrimeNumbers() {
    let start = parseInt(document.getElementById("input1Start").value);
    let end = parseInt(document.getElementById("input1End").value);
    let sum = 0;
    for (let num = start; num <= end; num++) {
        let divisorCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisorCount++;
            }
        }
        if (divisorCount === 2) {
            sum += num;
        }
    }
    showResult("output1", `The sum of all prime numbers between ${start} and ${end} is ${sum}`);
}

// 2. Average of Perfect Numbers: find the average of all perfect numbers between two numbers.
function averageOfPerfectNumbers() {
    let start = parseInt(document.getElementById("input2Start").value);
    let end = parseInt(document.getElementById("input2End").value);
    let sum = 0;
    let count = 0;
    for (let num = start; num <= end; num++) {
        let divisorSum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisorSum += i;
            }
        }
        if (divisorSum === num) {
            sum += num;
            count++;
        }
    }
    let average = count === 0 ? 0 : sum / count;
    showResult("output2", `The average of all perfect numbers between ${start} and ${end} is ${average}`);
}

// 3. Palindrome Numbers: print all palindrome numbers between two numbers.
function printPalindromeNumbers() {
    let start = parseInt(document.getElementById("input3Start").value);
    let end = parseInt(document.getElementById("input3End").value);
    let palindromes = [];
    for (let num = start; num <= end; num++) {
        let remaining = num;
        let reversedNum = 0;
        while (remaining > 0) {
            let digit = remaining % 10;
            reversedNum = reversedNum * 10 + digit;
            remaining = Math.floor(remaining / 10);
        }
        if (num === reversedNum) {
            palindromes.push(num);
        }
    }
    showResult("output3", `Palindrome numbers between ${start} and ${end}: ${palindromes.join(", ")}`);
}

// 4. Numbers With Exactly 3 Factors: print all numbers between two numbers that have exactly 3 factors.
function printFactorOf3() {
    let start = parseInt(document.getElementById("input4Start").value);
    let end = parseInt(document.getElementById("input4End").value);
    let numbers = [];
    for (let num = start; num <= end; num++) {
        let factorCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factorCount++;
            }
        }
        if (factorCount === 3) {
            numbers.push(num);
        }
    }
    showResult("output4", `Numbers between ${start} and ${end} that have exactly 3 factors: ${numbers.join(", ")}`);
}

// 5. Number With Maximum Factors: find the number between two numbers that has the maximum number of factors.
function numberWithMaxFactors() {
    let start = parseInt(document.getElementById("input5Start").value);
    let end = parseInt(document.getElementById("input5End").value);
    let maxFactors = 0;
    let number = start;
    for (let num = start; num <= end; num++) {
        let factorCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factorCount++;
            }
        }
        if (factorCount > maxFactors) {
            maxFactors = factorCount;
            number = num;
        }
    }
    showResult("output5", `The number between ${start} and ${end} with the maximum number of factors is ${number}, with ${maxFactors} factors.`);
}
