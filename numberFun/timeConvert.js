function timeConvert(number) { 

  var hours = Math.floor(number/60);
  var minutes = number % 60; 
  if (minutes < 10) {
    minutes = '0'+ minutes;
  }
  
  var convert = hours + ':' + minutes;
  return convert;
            
}   

timeConvert(65);