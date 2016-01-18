function linearSearch(values, key) {
    for(var i = 0; i < values.length; ++i){
        if (values[i] == key) { return i; }
    }
    return -1;
}

