describe('findIndexBinary', function () {
    var numArray = [5, 4, 3, 2, 1, 0],
        charArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    it('Should return the index of a given key in an array with binary search.', function () {
        expect(findIndexBinary((numArray, 3))).toEqual(2);
        expect(findIndexBinary(numArray, 0)).toEqual(5);
        expect(findIndexBinary(charArray, 'g')).toEqual(-1);
        expect(findIndexBinary(charArray, 'e')).toEqual(4);

    });

});