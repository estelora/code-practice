//this Example uses regex and works even with strange spaces, not mine
function Palindrome(str) { 
  var lets = str.match(/[a-z]/ig).join('').toLowerCase();
  function isPalin(c){
    if(c.length <= 1) return true;
    if(c[0] !== c[c.length-1]) return false;
    return isPalin(c.substr(1,c.length-2));
  }
  return isPalin(lets);
}