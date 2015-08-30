describe('secondGreatLow', function(){
  it('should return the second greatest and second lowest numbers from an array', function() {
      expect(secondGreatLow([78, 90, 100, 1, 2])).toEqual('2 90');
      expect(secondGreatLow([1,6,2,3,4,5])).toEqual('2 5');
      expect(secondGreatLow([100, 200, 3, 400, 5, 1])).toEqual('3 200');
      expect(secondGreatLow([90, 23])).toEqual('23 90');

  })
})