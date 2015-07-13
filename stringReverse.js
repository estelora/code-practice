function stringReverse(string) {   
  
  var back = '';
  for (var i = string.length - 1; i >= 0; i--)
  back += string[i];
  str = back;
  return string;    

}

stringReverse("backwards");
stringReverse("palindrome");
stringReverse("honeybunny");
stringReverse("racecar");