function SecondGreatLow(array) {
  var sort;
  var input = array;
  if (input.length == 2 ) {
    sort = input.sort(function(a, b){return a-b});
    var result = sort[0] + ' ' + sort[1];
    return result;


  } else if (input.length == 3) {
    var sort = input.sort(function(a, b){return a-b});
    //remove lowest #
     sort.splice(0,1);
    var last = sort.length-1;
    //remove highest #
    sort.splice(last, 1);
    var result = sort.toString() + ' ' + sort.toString();
    console.log(result);
    return result;
    


  } else if (input.length > 3) {
     //sort array, ascending
    var sort = input.sort(function(a, b){return a-b});
    //remove lowest #
    console.log(sort);
    sort.splice(0,1);
    var last = sort.length-1;
    //remove highest #
    sort.splice(last, 1);
    //return new array
    sort = [sort[0], sort[sort.length-1]];
    var result = sort[0] + ' '  + sort[1];
    return result;
  }

} 
//incorrect test cases :(
//[7, 7, 90, 1000003]
//(2,2,2,5,5,5,6)