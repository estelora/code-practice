describe('firstFactorial', function () {

  it('Should return the first factorial of a number.', function () {
    expect(firstFactorial(4)).toEqual(24);
    expect(firstFactorial(0)).toEqual(0);
    expect(firstFactorial(5)).toEqual(120);
  });

});