describe('letterCount1', function(){
  it('Should return the 1st word with the greatest # of repeated characters.', function() {
    expect(letterCount1('i like euclidean geometry')).toEqual('euclidean');
    expect(letterCount1('restful API calls')).toEqual('calls');
    expect(letterCount1('lackluster Bauble')).toEqual('lackluster');
  }); 
  it('Should return -1 when there are no repeated letters.', function() {
    expect(letterCount1('no double chars')).toEqual(-1);
  });
});