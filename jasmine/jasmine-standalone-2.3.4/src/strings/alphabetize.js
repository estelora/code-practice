function alphabetize(string) { 
   
      var split = string.split(''); 
      alpha = split.sort().join('') ;
      return alpha;
  }

alphabetize('lydia');