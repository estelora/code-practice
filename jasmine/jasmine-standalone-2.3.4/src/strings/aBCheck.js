// Take string parameter and return true 
// if the characters 'a' and 'b' 
// are separated by exactly 3 places anywhere in the string.
// Assume that a precedes b

function aBCheck(string) { 
  var test = false;
  for (var i = 0; i < string.length; i++){
  
      if( string[i] == "a" && string[i+4] == "b"){
    
       test = true;
    
      }
  
    }

  string = test;
  return string; 
         
}