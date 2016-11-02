/*PROBLEMS ON:
QUESTION 4: NOT CALCULATIONG CORRECTLY
QUESTIONS 10, 11, 12


=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function somethingFunny() {
    return ("What do you call a dinosaur that knows a lot of words?  A thesaurus");
}
document.getElementById("q1").innerHTML = somethingFunny();

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

function divideByTwo(number) {
    return number / 2;
};
document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("q2").innerHTML = divideByTwo(document.getElementById("input2").value);
});


// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.


function greeting(firstName1, firstName2) {
    return "Hello " + firstName1 + " and " + firstName2 + "!";
}

greeting(document.getElementById("input3a").value, document.getElementById("input3b").value)


document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("q3").innerHTML = greeting(document.getElementById("input3a").value, document.getElementById("input3b").value);
});


// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

//====================IS NOT CALCULATING CORRECTLY
//=================
function avg4(n1, n2, n3, n4, n5, n6) {

    return (n1 + n2 + n3 + n4 + n5 + n6) / 6
};

console.log("average for function:", avg4(2, 2, 2, 2, 2, 2));

document.getElementById("button4").addEventListener("click", function() {
    var val1 = parseInt(document.getElementById('number1').value)
    var val2 = parseInt(document.getElementById('number2').value)
    var val3 = parseInt(document.getElementById('number3').value)
    var val4 = parseInt(document.getElementById('number4').value)
    var val5 = parseInt(document.getElementById('number5').value)
    var val6 = parseInt(document.getElementById('number6').value)
    console.log(avg4(val1, val2, val3, val4, val5, val6));
    document.getElementById("q4").innerHTML = "The average is: " +
        avg4(val1, val2, val3, val4, val5, val6)
});

var nums = [1, 2, 3]

function getAverage(arr) {
    var soln;
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    soln = (sum / arr.length)
    return soln
}
console.log(getAverage(nums));


// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.


function total(number, price) {
    return (number * price)
};

document.getElementById("button5").addEventListener("click", function() {
    document.getElementById("q5").innerHTML = ("Your monthly total is: $ " + total(6, document.getElementById("price1").value))
});




// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

//===================ISSUE WITH CALCULATING PERIMETER    parse Int
//
function area(length, width) {
    return (length * width)
};

function perimeter(length, width) {
    return (2 * (length + width));
};

// console.log(area(2,3));
// console.log(perimeter(2,3));

document.getElementById("button6a").addEventListener("click", function() {
    document.getElementById("q6a").innerHTML = ("The area is:" + area(document.getElementById("inputLength").value, document.getElementById("inputWidth").value))
});

///
document.getElementById("button6b").addEventListener("click", function() {
    document.getElementById("q6b").innerHTML = ("The perimeter is: " + perimeter(document.getElementById("inputLength").value, document.getElementById("inputWidth").value))
});


// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

function quarter(number) {
    return (number / 4)
};

// console.log(quarter(4));

document.getElementById("button7").addEventListener("click", function() {
    document.getElementById("q7").innerHTML = ("1/4 of the number is: " + quarter(document.getElementById("quarter1").value))
});

// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
    if (hours >= 8) {
        return ("Unsure as how you found the time to get 8 hours of sleep, but nice work!")
    } else {
        return ("Need better time management?  I feel ya.")
    }
};

document.getElementById("button8").addEventListener("click", function() {
    document.getElementById("q8").innerHTML = sleepings(document.getElementById("hours").value)
});



// 9. Develop a function that determines a person's age by asking them for their birth year.

function age(birthYear) {
    return "You're " + (2016 - birthYear) + " years old."
}

// console.log(age(1986));
document.getElementById("button9").addEventListener("click", function() {
    document.getElementById("q9").innerHTML = age(document.getElementById("year").value)
});



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.


teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var team1 = []
var team2 = []

function teams(array){
  for (var i = 0; i < array.length; i+=2) {
    team1.push(array[i])
  }
  for (var i = 1; i < array.length; i+=2) {
    team2.push(array[i])
  }
  return "Team 1: " + team1 + "\n" + "Team 2: " + team2;
//can you have multiple returns
};
console.log(teams(teammates));

//=============PRACTICE
// var grades = [90,86,71,75,92]
//
// function failingGrades(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] < 70) {
//       return false
//     }
//   }
//   return true
// }
// console.log(failingGrades(grades));
//

//IS THERE A WAY TO RUN A 'FOR' LOOP  WITH A MODULO.  I TRIED AND IT WOULDN'T RECOGNIZE 'i' IN THE 'IF' STATEMENT

// teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]





// // 11. Allow a user to enter a three digit number.
// //     Write a function that adds the numbers together.
// //     Hint #1: You need to turn a string into an integer.
// //     Hint #2: Strings can be treated as arrays too.
//
// ============WILL NOT RECOGNIZE SPLIT
function digitSum(number) {
  var strNum = number.toString()
  console.log('strNum',strNum);
  var splitNumber= strNum.split("");
  console.log('splitNum',splitNumber);
  var soln = 0
  for (var i = 0; i < splitNumber.length; i++) {
    var parsedNumber = parseInt(splitNumber[i])
    soln += parsedNumber
  }
  return soln
};
console.log(digitSum(345));

//
// //===================CHECKING CODE COMPONENTS
// var number = "134"
// // number.split("")
// var splitNumber = number.split("");
// // var parsedNumber = splitNumber.parseInt("")
// console.log(splitNumber);
//


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

//=====================NOT CALCULATING WITH THE BUTTON


function piggyBank(quarters, dimes, nickels, pennies) {
    var quartersAmt = (parseInt(quarters) * .25);
    var dimesAmt = (parseInt(dimes) * .1);
    var nickelsAmt = (parseInt(nickels) * .05);
    var penniesAmt = (parseInt(pennies) * .01);
    var fullAmt = (quartersAmt + dimesAmt + nickelsAmt + penniesAmt)
    return fullAmt.toFixed(2);
}
console.log(piggyBank(4,6,7,5));

var quartersInt = parseInt(document.getElementById("in12a").value)
var dimesInt = parseInt(document.getElementById("in12b").value)
var nickelsInt = parseInt(document.getElementById("in12a").value)
var penniesInt = parseInt(document.getElementById("in12a").value)
var quarterInt = parseInt(document.getElementById("in12a").value)

document.getElementById("btn12").addEventListener("click", function() {

    document.getElementById("q12").innerHTML = "The total amount is: $" +
        piggyBank(quartersInt, dimesInt, nickelsInt, penniesInt)
});






// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
arrayOfAllTheThings = ["one", 23, {
    thingsWhalesLove: "beaches"
}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
