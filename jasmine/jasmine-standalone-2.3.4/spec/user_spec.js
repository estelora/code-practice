describe('User', function() {
  //checking an object's method
  it('should ensure the user is 21 years old or older', function() {
    //toBeGreaterThan() matcher checks >
    expect(User.getAge()).toBeGreaterThan(20); 
    //toBeLessThan() matcher checks <
    expect(User.getAge()).toBeLessThan(35);
  })
});