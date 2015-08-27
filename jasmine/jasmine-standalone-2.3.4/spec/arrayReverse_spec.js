describe('arrayReverse', function() {
  it('should return the reversed version of a given array',
   function() {
    expect(arrayReverse([1,2,3,4,5,6])).toEqual([6,5,4,3,2,1]);
   });
});