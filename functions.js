// functions can see variables that are within its lexical scope

// functions can be defined anywhere in a program - including after other
// statements that use it.

// position within a script's text determines the variables a function can see
// and in JS, functions are the only thing that can create a new scope (not
// blocks per se).

var f = function(s) {// this is one way to declare a function - assign a var
    console.log("value passed in was " + s);
    return;
    // return with nothing specified sends back Undefined
};

function power(base, exponent) {// or use the keyword at the beginning of
    // statement
    power = base;
    for (var i = 0; i < exponent - 1; i++)
        power *= base;

    console.log("power of " + base + " raised to the exponent " + exponent + " = " + power);
    return base;
};

/****************************
 * RECURSION
 */
function powerRecursive(base, exponent) {// rather than using a for...loop
    if (exponent == 0) {
        return 1;
    } else {
        return base * powerRecursive(base, exponent - 1);
    }
}// recursion is ~10 times slower than a loop!

/**
 *But recursion is a good problem solving tool.
 * Consider this puzzle: by starting from the number 1 and repeatedly either
 * adding 5 or multiplying by 3, an infinite amount of new numbers can be
 * produced.
 * How would you write a function that, given a number, tries to find a sequence
 * of such additions and multiplications that produce that number? For example,
 * the number 13 could be reached by first multiplying by 3 and then adding 5
 * twice, whereas the number 15 cannot be reached at all. */
function finder(target) {// 'close over' the value we are looking for - so it's
    // not lost...
    function find(start, history) {// (history holds the sequence info)
        if (start == target) {  
            return history;  // found
        } else if (start > target) {// too great, null to avoid next recursive call
            return null;
        } else {// not there try, keep looking
            return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3) ");
        }
    }

    find(1, "1");
}

/****************************
 * CLOSURES
 */
// what happens to local variables when the function call that created them is
// no longer available?
function wrapValue(n) {
    var localVar = n;
    return function() {
        return localVar;
    };
}

var wrap1 = wrapValue(1);
// assign the anonymous function returned, passing a
// parameter to be stored in the 'closed over (closure)' function, for later use
var wrap2 = wrapValue(2);

function multiplier(factor) {// factor doesn't need to be stored explicitly as
    // a local variable - a parameter is a local variable per se
    return function(number) {
        return number * factor;
        // ...so the closed function still remembers
        //		what factor was set to
    };
}
