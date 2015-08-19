describe('compareNums', function(){
  it('should compare 2 nums return false if first num > second num,return true if second num > first num, -1 if nums are the same value', function() {
      expect(compareNums(1, 10)).toBeTruthy();
      expect(compareNums(55, 1)).toBeFalsy();
      expect(compareNums(5, 5)).toEqual(-1);
    });

});