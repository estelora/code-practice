describe('arrayReverse', function() {
  it('should return the reversed version of a given array',
   function() {
    expect(arrayReverse([1,2,3,4,5,6])).toEqual([6,5,4,3,2,1]);
    expect(arrayReverse(['t','e','s','t'])).toEqual(['t','s','e','t']);
    expect(arrayReverse([0,0,0,00])).toEqual([00,0,0,0]);
    expect(arrayReverse(['**','*','***'])).toEqual(['***','*','**']);
   });
});