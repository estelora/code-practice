describe('aBCheck', function () {

  it('Should return true when the char b is 3 chars after char a.', function () {
    expect(aBCheck('lane borrowed')).toBeTruthy();
    expect(aBCheck('are bricks')).toBeTruthy();
    expect(aBCheck('a    by')).toBeFalsy();
    expect(aBCheck('ab')).toBeFalsy();
    expect(aBCheck('hello world')).toBeFalsy();
  });

});