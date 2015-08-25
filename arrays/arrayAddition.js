function arrayAddition(array) {
    //sort in ascending order
    array = array.sort( function(a,b) {return a - b});
    //pop off the largest number
    var max = array.pop();

    function searchSum() {
      
      function search(sum,i) {
        
        //if the sum has been reached, return true
        if (sum === max) {
          return true;
        
        //else if sum > max, or the end has been reached without a match, return null
        } else if (sum > max || i == array.length) {
          return null;
        
        //otherwise keep searching and comparing
        } else {
          return search(sum + array[i],i + 1) || search(sum,i + 1);
        }
      }
    
    // START search with sum of zero at index zero
    // recursive solution
    return search(0,0);
    }

  return searchSum() || false;   
  
}

arrayAddition([1,2,3]);