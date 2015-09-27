describe('charCounter', function () {

  it('should return the number of times a given char happens in a string', function () {
    expect(charCounter('me', 'i')).toEqual(0);
    expect(charCounter('My Company', 'm')).toEqual(2);

  });

});