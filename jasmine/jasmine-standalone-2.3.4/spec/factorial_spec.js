describe('firstFactorial', function () {

  it('should return the factorial of a number', function () {
    expect(firstFactorial(4)).toEqual(24);
    expect(firstFactorial(0)).toEqual(0);
    expect(firstFactorial(5)).toEqual(120);
  });

});