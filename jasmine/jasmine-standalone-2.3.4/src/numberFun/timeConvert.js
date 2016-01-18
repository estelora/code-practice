// convert a given number of minutes into the hour and minute format
// for example, 65 becomes 1:05

function timeConvert(number) { 

  var hours = Math.floor(number/60);
  console.log(hours);
  var minutes = number % 60;
  console.log(minutes); 
  if (minutes < 10) {
    minutes = '0'+ minutes;
  }
  console.log(minutes); 
  
  var convert = hours + ':' + minutes;
  return convert;
            
}   

timeConvert(55);