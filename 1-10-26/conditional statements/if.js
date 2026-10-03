// Show the message in the result div (and in the console)
function showResult(id, message) {
    console.log(message)
    let result = document.getElementById(id)
    result.innerText = message
    result.style.display = "block"
}

function checkNumber() {
    let a=document.getElementById("number").value
    if (a>=100 && a<1000){
        showResult("result1", `${a} is a three digit number`)
    }
    else{
        showResult("result1", `${a} is not a three digit number`)
    }
}
//Check whether a given number is divisible by both 3 and 5 or not.
function checkDivisibility(){
    let num=document.getElementById("number1").value
    if (num%3==0 && num%5==0){
        showResult("result2", `${num} is divisible by both 3 and 5`)
    }
    else{
        showResult("result2", `${num} is not divisible by both 3 and 5`)
    }
}
//valid traingle or not
function checkvalidtriangleornot(){
    let a=parseInt(document.getElementById("side1").value)
    let b=parseInt(document.getElementById("side2").value)
    let c=parseInt(document.getElementById("side3").value)
    let s=a+b
    if (s>c){
        showResult("result3", `The triangle is valid`)
    }
    else{
        showResult("result3", `The triangle is not valid`)
    }

}
//#Check whether a given number is a multiple of 10 or not.
function checkMultipleof10(){
    let num=document.getElementById("number2").value
    if (num%10==0){
        showResult("result4", `${num} is a multiple of 10`)
    }
    else{
        showResult("result4", `${num} is not a multiple of 10`)
        }
}
//#Check the type of triangle based on its sides.
function checkTriangleType(a,b,c){
    a=parseInt(document.getElementById("side4").value)
    b=parseInt(document.getElementById("side5").value)
    c=parseInt(document.getElementById("side6").value)
    if (a===b && b===c){
        showResult("result5", `The triangle is equilateral`)
    }
    else if(a===b && b!=c || a===c && c!=b || b===c && c!=a){
        showResult("result5", `The triangle is isosceles`)
    }
    else{
        showResult("result5", `The triangle is scalene`)
    }
}

// Calculate the electricity bill based on units consumed.
//     0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.
function calculateElectricityBill() {
    let units = parseInt(document.getElementById("units").value);
    let billAmount = 0;
    if(units <= 100) {
        billAmount = units * 2;
    }
    else if(units <= 200 && units > 100) {
        billAmount = 100 * 2 + (units - 100) * 3;
    }
    else if(units <= 300 && units > 200) {
        billAmount = 100 * 2 + 100 * 3 + (units - 200) * 5;
    }
    else {
        billAmount = 100 * 2 + 100 * 3 + 100 * 5 + (units - 300) * 7;
    }
    showResult("result6", `The electricity bill for ${units} units is ₹${billAmount}`);
}
// Display the age category.
//     Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
function displayAgeCategory() {
    let age = parseInt(document.getElementById("age").value);
    if(age < 13) {
        showResult("result7", "The person is a Child.");
    }
    else if(age >= 13 && age <= 19) {
        showResult("result7", "The person is a Teenager.");
    }
    else if(age >= 20 && age <= 59) {
        showResult("result7", "The person is an Adult.");
    }
    else {
        showResult("result7", "The person is a Senior Citizen.");
    }
}
//'''4.Calculate the discount based on shopping amount.
//     Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
function calculateDiscount() {
    let amount = parseInt(document.getElementById("amount").value);
    let discount = 0;
    if(amount < 1000) {
        discount = 0;
    }
    else if(amount >= 1000 && amount <= 4999) {
        discount = amount * 0.10;
    }
    else if(amount >= 5000 && amount <= 9999) {
        discount = amount * 0.20;
    }
    else {
        discount = amount * 0.30;
    }
    showResult("result8", `The discount for ₹${amount} is ₹${discount}. The final amount after discount is ₹${amount - discount}`);
}
