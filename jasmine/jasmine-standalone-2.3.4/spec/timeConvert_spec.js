describe('timeConvert', function() {
  it('should convert a number of minutes to the hour and minutes format', function(){
    
    expect(timeConvert(65)).toEqual('1:05');
    expect(timeConvert(90)).toEqual('1:30');
    expect(timeConvert(41)).toEqual('0:41');
  
  });
});