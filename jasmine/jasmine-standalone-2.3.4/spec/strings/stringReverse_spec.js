describe('stringReverse', function () {
  it('Should return the reversed version of a string.', function () {
    expect(stringReverse('honeybunny')).toEqual('ynnubyenoh');
    expect(stringReverse('Backwords')).toEqual('sdrowkcaB');
    expect(stringReverse('palindromE')).toEqual('Emordnilap');
    expect(stringReverse('racecar')).toEqual('racecar');
  });
});