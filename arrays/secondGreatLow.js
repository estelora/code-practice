function secondGreatLow(array) {
  var sort;
  var input = array;
  if (input.length == 2 ) {
    sort = input.sort(function(a, b){return a-b});
    var finalArray = sort;
    return finalArray;


  } else if (input.length == 3) {
    var sort = input.sort(function(a, b){return a-b});
    //remove lowest #
     sort.splice(0,1);
    var last = sort.length-1;
    //remove highest #
    sort.splice(last, 1);
    var result = sort.toString() + ', ' + sort.toString();
    console.log(result);
    


  } else if (input.length == 2) {
     //sort array, ascending
    var sort = input.sort(function(a, b){return a-b});
    //remove lowest #
    sort.splice(0,1);
    var last = sort.length-1;
    //remove highest #
    sort.splice(last, 1);
    //return new array
    sort = [sort[0], sort[sort.length-1]];
    var finalArray = sort;
    return finalArray;
  }

}

secondGreatLow([1,2,6]);