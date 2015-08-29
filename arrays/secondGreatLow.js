function secondGreatLow(array) {
  //sort array, ascending
  var sort = array.sort(function(a, b){return a-b});
  //remove lowest #
  sort.splice(0,1);
  var last = sort.length-1;
  sort.splice(last, 1);
  console.log(sort);
  var secondLowest = sort[0];
  console.log(secondLowest);
  var secondGreatest = sort[sort.length-1];
  console.log(secondGreatest);
}

secondGreatLow([1,2,6,3,5,4]);