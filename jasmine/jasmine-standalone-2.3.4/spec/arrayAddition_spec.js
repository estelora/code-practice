describe('arrayAddition', function () {
  it ('should return true if any  combination of numbers in the array add up to the largest number in the array, return false if not', function() {
    //expect(arrayAddition([3, 5, -1, 8, 12])).toBeTruthy();
    expect(arrayAddition([1, 2 ,3, 100])).toBeFalsy();
  }); 
});
