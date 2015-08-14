describe('isPalindrome', function () {

  it('should return true when a string is a palindrome', function () {
    expect(isPalindrome('racecar')).toBeTruthy();
    expect(isPalindrome('Avid Diva')).toBeTruthy();
    expect(isPalindrome('is this a palindrome')).toBeFalsy();
    expect(isPalindrome('hello')).toBeFalsy();

  });

});

