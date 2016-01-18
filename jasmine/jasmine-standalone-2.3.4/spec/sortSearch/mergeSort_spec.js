describe('mergeSort', function() {
    var numArray = [0, -1, 100, 10, 13, 7, -8, 3, 1, 5.5];
    it('Should sort the array from the smallest to the largest values.', function(){
        expect(mergeSort(numArray).toEqual([-8, -1, 0, 3, 5.5, 7, 8, 10, 13]));
    });
});