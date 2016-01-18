
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

