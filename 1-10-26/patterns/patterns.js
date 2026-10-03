function showResult(id, message) {
    console.log(message);
    let result = document.getElementById(id);
    result.innerText = message;
    result.style.display = "block";
}

/*
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
*/
function printPattern1() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = i; j > 0; j--) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5
*/
function printPattern2() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= i; j--) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
function printPattern3() {
    let output = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
1 2 3 4 5
2 3 4 5
3 4 5
4 5
5
*/
function printPattern4() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = i; j <= 5; j++) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
*/
function printPattern5() {
    let output = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = i; j > 0; j--) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
    1
   12
  123
 1234
12345
*/
function printPattern6() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= i; j--) {
            output += " ";
        }
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
        1
      2 1
    3 2 1
  4 3 2 1
5 4 3 2 1
*/
function printPattern7() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= i; j--) {
            output += "  ";
        }
        for (let j = i; j > 0; j--) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
        5
      5 4
    5 4 3
  5 4 3 2
5 4 3 2 1
*/
function printPattern8() {
    let output = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j < i; j++) {
            output += "  ";
        }
        for (let j = 5; j >= i; j--) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
        5
      4 5
    3 4 5
  2 3 4 5
1 2 3 4 5
*/
function printPattern9() {
    let output = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j < i; j++) {
            output += "  ";
        }
        for (let j = i; j <= 5; j++) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
        5
      5 4 5
    5 4 3 4 5
  5 4 3 2 3 4 5
5 4 3 2 1 2 3 4 5
*/
function printPattern10() {
    let output = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j < i; j++) {
            output += "  ";
        }
        for (let j = 5; j >= i; j--) {
            output += j + " ";
        }
        for (let j = i + 1; j <= 5; j++) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

// 5 4 3 2 1 2 3 4 5
//   5 4 3 2 3 4 5
//     5 4 3 4 5
//       5 4 5
//         5
function printPattern11() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j < i; j++) {
            output += "  ";
        }
        for (let j = 5; j >= i; j--) {
            output += j + " ";
        }
        for (let j = i + 1; j <= 5; j++) {
            output += j + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

//        1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
function printPattern12() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j > i; j--) {
            output += "  ";
        }
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        for (let j = i; j > 1; j--) {
            output += (j - 1) + " ";
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
*       * * * * *
*       *
*       *
*       *
* * * * * * * * *
        *       *
        *       *
        *       *
* * * * *       *
*/
function printPattern13() {
    let output = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            if (j == 1 && i <= 5 || i == 5 || j == 9 && i >= 5 || j == 5 || i == 1 && j >= 5 || i == 9 && j <= 5) {
                output += "* ";
            } else {
                output += "  ";
            }
        }
        output += "\n";
    }
    showResult("result", output);
}

/*
        *
      *   *
* * * * * * * * *
  *           *
* * * * * * * * *
      *   *
        *
*/
function printPattern14() {
    let output = "";
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 9; j++) {
            if (i == 5 || i + j == 6 || j - i == 4 || i == 3 || i - j == 2 || i + j == 12) {
                output += "* ";
            } else {
                output += "  ";
            }
        }
        output += "\n";
    }
    showResult("result", output);
}
