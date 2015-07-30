//Reverse a string

function stringReverse(string) {   
  
  //empty string
  var backString = '';
  
  //for loop decrements starting at the back
  for (var i = string.length - 1; i >= 0; i--) {
    
    //return character at the index of i, as we loop
    backString+= string[i];
  }
  

  //return completed back 
  return backString;

}


//Test Cases

stringReverse("backwards");
stringReverse("palindrome");
stringReverse("honeybunny");
stringReverse("racecar");