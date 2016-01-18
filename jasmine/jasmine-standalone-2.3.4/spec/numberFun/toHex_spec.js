describe('toHex', function () {
  it('Should convert a number into a Hex string.', function () {
    expect(toHex(2000001)).toEqual('1e8481');
  });
});


describe('toDec', function () {

  it('Should convert a Hex string into a number.', function () {
    expect(toDec('1e8481')).toEqual(2000001);

  });

});