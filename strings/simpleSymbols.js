//String must have at least one letter
//letter must be surrounded by a +
//String must contain =, +, with letters between
//string must end and begin with either = or +

var str = "++d+===+c++=";
//str return true
var string = "++dd===c";
//string return false.


var simpleSymbols = function (str) {
    //str must start with = or +
    if (str[0] != "+" && s[0] != "=") {
        return false;
    //st must end with = or +
    } else if (str[str.length - 1] != "+" && str[str.length - 1] != "=") {
        return false;
    //loop through to check the characters surrounding +, = within the string
    } else {
        for (var i = 1; i < str.length - 1; i++) {
            //if the char is not =, + check to see if + both before and after it
            if (str[i] != "+" && str[i] != "=") {
                //if + does not surround the letter, return false;
                if (str[i-1] != "+" || str[i+1] != "+") {
                    return false;
                }
            }
        }
    }
    //if string passes all the tests, return true
    return true;
}

