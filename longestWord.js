function LongestWord(sen) {
  longest = null;
  words = sen.split(" ")
  //forEach instead of a for Loop
  words.forEach(function(word){
    if (word.length > longest.length){
        longest = word;
    };
  });
return longest;
};

LongestWord("the Longest word");

function LongestWord(sen) {
    longest = null;
    words = sen.split(" ")
      
    for (var i = 0; i < words.length; i++) {
    if (best.length < words[i].length) {
        longest= words[i];
        } 
    }
    return longest;   
}

LongestWord("my best friend");

