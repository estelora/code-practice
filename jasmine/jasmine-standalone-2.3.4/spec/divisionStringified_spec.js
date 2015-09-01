describe('divisionStringified', function(){
  it('should return a stringified quotient with a comma instead of a decimal when the length is greater than 3 chars', function(){
    expect(divisionStringified(1000, 3)).toEqual("333,3333333333333");
  });
  it ('should return a stringified quotient with no comma when the length is less than 3', function(){
    expect(divisionStringified(20, 8)).toEqual("2.5");
  });
})