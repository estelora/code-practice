describe('some feature', function() {
  describe('someFunction', function() {
    it('should return true when called', function() {
      /* toEqual() works but is not the best matcher
       * expect(someFunction()).toEqual(true); */
      
      // better matcher for a boolean
      expect(someFunction()).toBeTruthy();
      
       matcher for expecting false 
       * expect(someFunction()).toBeFalsy(); 
       * .not.toBeTruthy negates, aka toBeFalsy
       * expect(someFunction()).not.toBeTruthy();
       * .not.toBeFalsy negates, aka toBeTruthy
       * expect(someFunction()).not.toBeFalsy(); 
    });
  });

  describe('anotherFunction', function() {
    it('returns an array of names', function() {
      //matcher expects the array toContain this value
      expect(anotherFunction()).toContain('myName');
      
      /* matcher expects the array toNotContain this value
       * expect(anotherFunction()).toNotContain('otherName');
       * .not.toContain() negates aka toNotContain
       * expect(anotherFunction()).not.toContain('myName');
       * .not.toNotContain() negates, aka toContain()
       * expect(anotherFunction()).not.toNotContain('otherName'); */
    });
  });
});

describe('User', function() {
  it('should ensure the user is 21 years old or older', function() {
    //checking an object's method
    expect(User.getAge()).toBeGreaterThan(20); 
  })
});