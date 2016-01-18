describe('linearSearch', function () {
    var numArray = [5, 4, 3, 2, 1, 0],
        charArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    it('Should return the index of a given key in an array with linear search.', function () {
        expect(linearSearch(numArray, 3)).toEqual(2);
        expect(linearSearch(numArray, 0)).toEqual(5);
        expect(linearSearch(charArray, 'g')).toEqual(-1);
        expect(linearSearch(charArray, 'e')).toEqual(4);

    });

});