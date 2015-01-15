// Arrays are objects in js

// use array.indexOf(element) operator on an array to test if a value exists in an array.  The
// return value is the index position, or -1 if not found.
// array.lastIndexOf(element) searches for an array element, starting from the end!

// Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching from.
// slice(index, offset) is another array element which takes a start index and an end index and returns an array that has only the elements between those indices.

var a = [];

function arrayPush(e) {// use push() to add to the end of an array
    a.push(e);
}

function arrayPop() {// use pop to remove last element from an array
    return a.pop();
}

// unshift(e) and shift(e) are the equivalent array operations for adding to the start of an array

function flatten(s) {// flatten to a single string - inserting the supplied separator
    return a.join(s);
}

// LISTS and arrays

function arrayToList(arr) {
    var list;
    // loop starting from the end
    for ( i = arr.length - 1; i > -1; i--) {
        list = {
            value : arr[i],
            rest : list || null // undefined resolves to false
        };
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var node = list; /* init */
    node; /* test (not null) */
    node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

// new list that adds the element to the front of the input list
function prepend(e, list) {
    var next = {
        value : e,
        rest : list
    };
    return next;
}

//nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
function nth(list, number) {
    var counter, e = undefined;
    counter = 0;
    for (var node = list; /* init */
    node; /* test (not null) */
    node = node.rest) {
        e = node;
        if (counter === number)
            counter++;
    }
    return e;
}
