function timeConvert(number) { 

  var hours = Math.floor(number/60);
  var minutes = num % 60; 
  
  var convert = hours + ':' + minutes;
  return convert;
            
}   
