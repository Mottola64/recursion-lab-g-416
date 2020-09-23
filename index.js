function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  let myReversedString;
  if (string.length > 1) {
    string.pop().myReversedString.push()
    reverseString(string)
  } else {
    return true;
  }
}