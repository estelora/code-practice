function SecondGreatLow(array) {
  var sort;
  var input = array;
  //sort array, ascending
  var sort = input.sort(function(a, b){return a-b});
  //remove duplicates
  //sort array, ascending
  /* var unique =  = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
  })*/
  if (sort.length == 2 ) {
    var result = sort[0] + ' ' + sort[1];
    return result;


  } else if (sort.length == 3) {
    //remove lowest #
     sort.splice(0,1);
    var last = sort.length-1;
    //remove highest #
    sort.splice(last, 1);
    var result = sort.toString() + ' ' + sort.toString();
    console.log(result);
    return result;
    


  } else if (sort.length > 3) {
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