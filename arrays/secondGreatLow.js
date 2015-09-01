
function secondGreatLow(array) {

  //sort array, ascending
  array.sort(function(a, b){return a-b});
  
  //remove duplicates
  var sort = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
  });

  //splice and dice, depending on length of sorted array
  if (sort.length == 1) {
    result = sort[0] + ' ' + sort[0];

  } else if (sort.length == 2 ) {
    result = sort[0] + ' ' + sort[1];

  } else if (sort.length == 3) {
    sort.splice(0,1);
    sort.splice(sort.length-1, 1);
    result = sort[0] + ' ' + sort[0];

  } else if (sort.length > 3) {
    sort.splice(0,1);
    sort.splice(sort.length-1, 1);
    result = sort[0] + ' '  + sort[sort.length-1];;
  }
  
  return result;
} 
