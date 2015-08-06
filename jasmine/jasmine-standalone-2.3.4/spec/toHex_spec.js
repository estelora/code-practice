describe("toHex", function () {

  it('should convert a number into a Hex string', function () {
    expect(toHex(2000001)).toEqual;('1E8481');

  });

});


describe("toDec", function () {

  it('should convert a Hex string into a number', function () {
    expect(toDec('1E8481')).toEqual;(2000001);

  });

});