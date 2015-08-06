function aBCheck(string) { 
  var test = false;
  for (var i = 0; i < string.length; i++){
  
      if( string[i] == "a" && string[i+4] == "b"){
    
       test = true;
    
      }
  
    }
  // code goes here
  string = test;
  return string; 
         
}