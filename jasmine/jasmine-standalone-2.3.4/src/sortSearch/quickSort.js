/**
 * O(n log n)
 * Choose an element to be the pivot (1st element this case)
 * After pivot is selected, iterate over the list from left to right
 * keep track of a marker on both sides of the list
 * Should the current item ever be greater than the pivot
 * ->check the item against right marker
 * If the right item >= to the pivot, it remains in place
 * Move on to the right marker, continue to move the right marker
 * until there is a smaller value than the pivot
 * Swap elements of both markers and move the the left to the right by 1 place
 * Repeat steps until the markers close
 * Results in two partially sorted lists
 * Then, lists are sorted recursively with the same steps
 */

function quickSort(data) {

    if(data.length < 1) {
        return [];
    }

    var left = [],
        right = [],
        pivot = data[0];

    for(var i = 1; i < data.length; i++) {
        if(data[i] < pivot) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }

    return[].concat(quickSort(left), pivot, quickSort(right));

}