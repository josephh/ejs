//  Higher order functions either take functions as args or return them

// The function here is included as an example and improved upon further down this module.
function arrayIteration() {
    var array = [1, 2, 3];
    for (var i = 0; i < array.length; i++) {
        // The function and its construct, provide opportunities to get it wrong!
        // e.g. unnecessary use of function-scoped variables...
        var current = array[i];
        console.log(current);
    }
}
// arrayIteration();

// Actually, forEach() is available as a standard method on arrays but we write out similar here, for illustration.
// Get the looping behaviour to apply to an array argument...
function forEach(array) {
    for (var i = 0; i < array.length; i++)
        console.log(array[i]);
}
// forEach(["Wampeter", "Foma", "Granfalloon"]);

// ...better still, loop over the array argument and supply the behaviour we'd like to apply as the (function) parameter 'action'.
function forEachDo(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}
forEachDo(["Wampeter", "Foma", "Granfalloon"], console.log);
var numbers = [1, 2, 3, 4, 5], sum = 0;
// Here, the body of the code is inside the anonymous function:
forEachDo(numbers, function(number) {
    sum += number; // (and 'number' makes use of closures to offer a variable name for the array element parameter.
});
console.log(sum);

// The js standard method apply() is helpful where we want to process more arguments than the function declaration expects
// The pattern looks like,
function transparentWrapping(f) {
  return function() {
    return f.apply(null /* null simulates a method call*/, arguments /* function 'f' is applied to all elements */); // the arguments get applied
  };
}

// filter() is another standard js method - a simple illustration of what it otherwise does shown
function filter(array, test /* 'test' holds a function value - filling a gap in the computation */ ) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) // whatever 'test' represents is called for each value in the array and its value added to a new array 
    // making it a pure function.
      passed.push(array[i]);
  }
  return passed;
}

// using the contents of ancestry_test_data
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
// → [{name: "Philibert Haverbeke", …}, …]

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}
var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
  return person.name;
}));
// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]