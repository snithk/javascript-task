function avgnum(){
    let n1=Number(document.getElementById("n1").value)
    let n2=Number(document.getElementById("n2").value)
    let n3=Number(document.getElementById("n3").value)
    document.getElementById("res1").innerHTML="<p>Average: "+(n1+n2+n3)/3+"</p>"
}

function domavgnum(){
    let n1=Number(document.getElementById("d1").value)
    let n2=Number(document.getElementById("d2").value)
    let n3=Number(document.getElementById("d3").value)
    let sum=(n1+n2+n3)/3
    document.getElementById("domaverageofthree").innerHTML="<p>Average: "+sum+"</p>"
}

function sumnaturalnum(){
    let n=Number(document.getElementById("n6").value)
    let sumnum=(n*(n+1))/2
    document.getElementById("sumnatural").innerHTML="<p>Sum: "+sumnum+"</p>"
}

function Profit_percentage(){
    let sp=Number(document.getElementById("sp").value)
    let cp=Number(document.getElementById("cp").value)
    let profit=sp-cp
    let percentage=(profit/cp)*100
    document.getElementById("profit_percentage").innerHTML="<p>Profit percentage: "+percentage+"%</p>"
}

function ptr(){
    let p=Number(document.getElementById("p").value)
    let t=Number(document.getElementById("t").value)
    let r=Number(document.getElementById("r").value)
    let interest=(p*t*r)/100
    document.getElementById("ptr").innerHTML="<p>Simple interest: "+interest+"</p>"
}

function missingangle(){
    let a=Number(document.getElementById("angle1").value)
    let b=Number(document.getElementById("angle2").value)
    let missing=(180-a-b)
    document.getElementById("angle").innerHTML="<p>Missing angle: "+missing+"</p>"
}

function last(){
    let l=Number(document.getElementById("l").value)
    let number=l%10
    document.getElementById("last").innerHTML="<p>Last digit of the number: "+number+"</p>"
}

function remove(){
    let digit=Number(document.getElementById("rd").value)
    document.getElementById("removedigit").innerHTML="<p>Number with last digit removed: "+Math.floor(digit/10)+"</p>"
}

function fFirst_digit_3_digit_number(){
    let f=Number(document.getElementById("first_digit").value)
    while (f>=10){
        f=parseInt(f/10)
    }
    document.getElementById("firstdigit").innerHTML="<p>First digit: "+f+"</p>"
}

function firstDigitFiveDigit(){
    let f=Number(document.getElementById("fd5").value)
    while (f>=10){
        f=parseInt(f/10)
    }
    document.getElementById("firstdigit5").innerHTML="<p>First digit: "+f+"</p>"
}

function celsiusToFahrenheit(){
    let c=Number(document.getElementById("celsius").value)
    let f=(c*9/5)+32
    document.getElementById("fahrenheit").innerHTML="<p>Fahrenheit: "+f+"&deg;F</p>"
}

function fahrenheitToCelsius(){
    let f=Number(document.getElementById("fahrenheit_in").value)
    let c=(f-32)*5/9
    document.getElementById("celsius_out").innerHTML="<p>Celsius: "+c+"&deg;C</p>"
}

function grossSalary(){
    let basic=Number(document.getElementById("basic").value)
    let hra=Number(document.getElementById("hra").value)
    let da=Number(document.getElementById("da").value)
    let gross=basic+hra+da
    document.getElementById("gross").innerHTML="<p>Gross salary: "+gross+"</p>"
}

function swapWithThird(){
    let a=Number(document.getElementById("swap1a").value)
    let b=Number(document.getElementById("swap1b").value)
    let temp=a
    a=b
    b=temp
    document.getElementById("swapWithThirdResult").innerHTML="<p>a = "+a+", b = "+b+"</p>"
}

function swapWithoutThird(){
    let a=Number(document.getElementById("swap2a").value)
    let b=Number(document.getElementById("swap2b").value)
    a=a+b
    b=a-b
    a=a-b
    document.getElementById("swapWithoutThirdResult").innerHTML="<p>a = "+a+", b = "+b+"</p>"
}
