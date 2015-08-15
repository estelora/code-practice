function isPalindrome(string) {
  
  var oppose = string.split('').reverse().join('');
  
  //make it work with all cases
  if ( string.toLowerCase() === oppose.toLowerCase() ) {
    return true;
  } else {
    return false;
  }
}
