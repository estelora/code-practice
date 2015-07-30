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


//same, but with a regEx

function LongestWord(str) {
    str = str.replace(/[^a-zA-Z]+/g," ");
    var best="";
    var arr=str.split(" ");
    for (var i = 0; i < array.length;i++) {
        if (best.length < arr[i].length) {
            best=arr[i];
        } 
    }
    return best;   
}
   