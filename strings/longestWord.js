<<<<<<< HEAD
//Create a function that returns the longest word from a string

function longestWord(sen) {
    var str = sen.split(' ');
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
longestWord('tummy yummy');


function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;

    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}

longestWord('pride and prejudice');

longestWord('');





longestWord('my best friend');
=======
function LongestWord(sen) {
  longest = null;
  words = sen.split(' ');
  
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
    words = sen.split(' ');
      
    //for Loop instead of forEach
    for (var i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
        longest = words[i];
        } 
    }
    return longest;   
}

LongestWord("my best friend");
>>>>>>> 82747912cc008ae5cd565a114c5b5c4565e076be

