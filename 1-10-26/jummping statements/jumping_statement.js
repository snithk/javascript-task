function showResult(id, message) {
    console.log(message)
    let result = document.getElementById(id)
    result.innerText = message
    result.style.display = "block"
}

//# write the code to display 1st divisible of 5 in the range of 6 to 20
function firstDivisibleOf5() {
    let start=Number(document.getElementById("start1").value);
    let end=Number(document.getElementById("end1").value);
    let found = false;
    for (let num = start; num <= end; num++) {
        if (num % 5 === 0) {
            showResult("result1", `The first number divisible by 5 between ${start} and ${end} is ${num}`);
            found = true;
            break; // Exit the loop after finding the first divisible number
        }
    }
    if (!found) {
        showResult("result1", `There is no number divisible by 5 between ${start} and ${end}`);
    }
}
//#write teh code display last number which is divisible by 3 in the range of 11 tp 28
function lastDivisibleOf3() {
    let start=Number(document.getElementById("start2").value);
    let end=Number(document.getElementById("end2").value);
    let lastDivisible = null;
    for (let num = end; num >= start; num--) {
        if (num % 3 === 0) {
            lastDivisible = num;
            break; // Exit the loop after finding the last divisible number
        }
    }
    showResult("result2", `The last number divisible by 3 between ${start} and ${end} is ${lastDivisible}`);
}
//#display first three number in the range of 3 to 10
function firstThreeNumbers() {
    let start=Number(document.getElementById("start3").value);
    let end=Number(document.getElementById("end3").value);
    let numbers=[];
    let count = 0;
    for (let num = start; num <= end; num++) {
        if (count==3){
            break
        }
        numbers.push(num);
        count++;
    }
    showResult("result3", `First three numbers: ${numbers.join(", ")}`);
}
//# display last even number in given digit
function lastEvenNumber() {
    let num=Number(document.getElementById("number1").value);
    let lastEven = null;
    while (num >= 0) {
        let a=num%10
        if (a % 2 === 0) {
            lastEven = a;
            break; // Exit the loop after finding the last even digit
        }
        num=Math.floor(num / 10);
    }
    showResult("result4", `The last even digit is ${lastEven}`);
}
//# display the first digit which is less than 3 in given number
function firstDigitLessThan3() {
    let num=Number(document.getElementById("number2").value);
    let firstDigit = null;
    while (num >= 0) {
        let a=num%10
        if (a < 3) {
            firstDigit = a;
            break; // Exit the loop after finding the first digit less than 3
        }
        num=Math.floor(num / 10);
    }
    showResult("result5", `The first digit less than 3 is ${firstDigit}`);
}
//#In the while loop while using continue we need to update the value intenshionally when meets the condition
function displayNumbersWithContinue() {
    let i = 1;
    let num = Number(document.getElementById("number3").value);
    let numbers=[];
    while (i <= num) {
        if (i === 3) {
            i++; // Update the value of i before continuing to avoid an infinite loop
            continue;
        }
        numbers.push(i);
        i++;
    }
    showResult("result6", `Numbers: ${numbers.join(", ")}`);
}
//#skip all the even  number in the range 1 to 10
function skipEvenNumbers() {
    let start = Number(document.getElementById("start4").value);
    let end = Number(document.getElementById("end4").value);
    let numbers=[];
    for (let num = start; num <= end; num++) {
        if (num % 2 === 0) {
            continue; // Skip even numbers
        }
        numbers.push(num);
    }
    showResult("result7", `Odd numbers: ${numbers.join(", ")}`);
}
