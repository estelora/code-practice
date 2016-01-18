/*
 * Break a list in half to create two lists based on a midpoint
 * Keep breaking until the lists are of only single elements
 * Merge all elements together in the correct order
 * As the elements are merged, they are already sorted
 * Formula: divide & conquer + recursion
 * O = (n log n)
 */

function mergeSort(data) {

    if(data.length < 2) {
        return data;
    }

    var midPoint = Math.round(data.length | 2);

    return merge (
        mergeSort(data.slice(0, midPoint)),
        mergeSort(data.slice(midPoint))
    );
}

function merge(left, right) {
    var out = [];
    while(left.length && right.length) {
        out.push(left[0] < right [0]
        ? left.shift() : right.shift());
    }
    while(left.length) {
        out.push(left.shift())
    }
    while(right.length){
        out.push(right.shift());
    }
    return out;
}