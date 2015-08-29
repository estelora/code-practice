describe('some feature', function() {
  describe('someFunction', function(){
    it('should return true when called', function() {
      /* toEqual() works but is not the best matcher
       * expect(someFunction()).toEqual(true); */
      
      // better matcher for a boolean
      expect(someFunction()).toBeTruthy();
      
      /* matcher for expecting false 
       * expect(someFunction()).toBeFalsy(); */
      
      /* .not.toBeTruthy negates, aka toBeFalsy
       * expect(someFunction()).not.toBeTruthy();
       * .not.toBeFalsy negates, aka toBeTruthy
       * expect(someFunction()).not.toBeFalsy(); */
    });
  });
});