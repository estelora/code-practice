function isPalindrome(s) {
  var o = s.split("").reverse().join("");
  if ( s.toLowerCase() === o.toLowerCase() ) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello');
isPalindrome('racecar');
isPalindrome('avid diva');
isPalindrome('is this a palindrome?');
