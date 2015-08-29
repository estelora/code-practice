describe('User', function() {
  it('should ensure the user is 21 years old or older', function() {
    //checking an object's method
    expect(User.getAge()).toBeGreaterThan(20); 
  })
});