
function secondGreatLow(array) {
  var sort;
  var input = array;
  //sort array, ascending
  var sort = input.sort(function(a, b){return a-b});
  //remove duplicates
  var unique = sort.filter(function(item, pos) {
    return sort.indexOf(item) == pos;
  });
  console.log(unique);
  if (unique.length == 1 ) {
    var result = unique[0] + ' ' + unique[0];
    return result;

  } else if (unique.length == 2 ) {
    var result = unique[0] + ' ' + unique[1];
    return result;

  } else if (unique.length == 3) {
    //remove lowest #
    unique.splice(0,1);
    var last = unique.length-1;
    //remove highest #
    unique.splice(last, 1);
    var result = unique.toString() + ' ' + unique.toString();
    console.log(result);
    return result;
    


  } else if (unique.length > 3) {
    //remove lowest #
    unique.splice(0,1);
    var last = unique.length-1;
    //remove highest #
    unique.splice(last, 1);
    //return new array
    var result = unique[0] + ' '  + unique[1];
    return result;
  }

} 
//incorrect test cases :(
//(78, 90, 100, 1, 2)
//(100, 200, 3, 400, 5, 1) 
//(90, 23)