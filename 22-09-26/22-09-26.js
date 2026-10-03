function add(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var sum=n1+n2;
    console.log(sum);
    document.getElementById("res").value=sum;
}
function sub(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var s=n1-n2;
    document.getElementById("res").value=s;
}
function mul(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var m=n1*n2;
    document.getElementById("res").value=m;
}
function divsion(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var d=n1/n2;
    document.getElementById("res").value=d;
}
function moduls(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var mo=n1%n2;
    document.getElementById("res").value=mo;
}
function exponent(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var ex=n1**n2;
    document.getElementById("res").value=ex;
}
