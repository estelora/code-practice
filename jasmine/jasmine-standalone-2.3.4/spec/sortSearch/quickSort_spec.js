describe('quickSort', function(){
    var numArray = [0, -1, 8, 10, 22, 7, 6, 3, 1, 5.5];
    it('Should sort the array from smallest to largest values.', function(){
       expect(quickSort(numArray).toEqual([-1, 0, 1, 3, 5.5, 6, 7, 8, 10, 22]));
    });
})