describe('compareNums', function(){
  it('should compare 2 nums return false if first num > second num, return true if second num > first num, -1 if nums are equal', function() {
      expect(compareNums(1000, 5000)).toBeTruthy();
      expect(compareNums(0, 1)).toBeTruthy();
      expect(compareNums(0, -10)).toBeFalsy();
      expect(compareNums(55, 1)).toBeFalsy();
      expect(compareNums(55, -1)).toBeFalsy();
      expect(compareNums(5, 5)).toEqual(-1);
      expect(compareNums(-7.3, -7.3)).toEqual(-1);
    });

});