function beanCounter(string, char) {
  var count = 0;
  
  for (var i = 0; i < string.length; i++){
    if (string.charAt(i) == char)
      count += 1;
  }
  return count;
}


beanCounter('lydia', 'l');

beanCounter('me', 'i');