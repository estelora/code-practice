//better version, within a function


function loopHash(lines) {

  var hash = '#';

  for (var i = 1; i <= lines; i++) {
    if (i > 1) {
      hash = hash + '#';
      console.log(hash);
    } else {
      console.log(hash);
    }
  }
  
}

loopHash(7);
