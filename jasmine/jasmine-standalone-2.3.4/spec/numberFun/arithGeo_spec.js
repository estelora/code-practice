describe('arithGeo', function () {
it ('Should indicate whether an array of numbers follows a geometric or arithmetic pattern.', function() {
      expect(arithGeo([1, 2, 3 , 4])).toEqual('Arithmetic');
      expect(arithGeo([0])).toEqual('both');
      expect(arithGeo([])).toEqual('neither');
      expect(arithGeo([1, 0, 1, 0])).toEqual(-1);
      expect(arithGeo([1, 1, 1])).toEqual('Arithmetic');
      expect(arithGeo(null)).toEqual('error');
      expect(arithGeo([2, 4, 8, 16])).toEqual('Geometric');
      expect(arithGeo([3, 2, 6])).toEqual(-1);
     }); 
});
