//Capitalize the first only
function letterCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

letterCapitalize('my words');

//Capitalize each, courtesy regEx
function LetterCapitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

letterCapitalize('my words');