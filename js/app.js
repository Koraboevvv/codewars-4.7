function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

  function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

function multiply(a, b){
  return a * b
}

function numberToString(num) {
  return num.toString()
}

function solution(str){
  return str.split("").reverse().join("")
}

function makeNegative(num) {
  return -Math.abs(num)
}

function opposite(number) {
  if (number > 0) {
    return -Math.abs(number)
  } else if ( number <= 0 ) {
       return Math.abs(number)    
  }
}


function booleanToString(b){
  return b ? "true" : "false"
}

function repeatStr (n, s) {
  return s.repeat(n , s);
}

function boolToWord( bool ){
  return bool ? "Yes" : "No"
//   if ( bool == true) {
//     return "Yes"
//   } else if (bool == false) {
//       return "No"
//   }
}


function makeUpperCase(str) {
  return str.toUpperCase()
}

function createPhoneNumber(numbers){
  let code = numbers.slice(0,3).join("")
  let partOne = numbers.slice(3,6).join("")
  let partTwo = numbers.slice(6).join("")
  return `(${code}) ${partOne}-${partTwo}`
}