//  higher order functions either take functions as args or return them

// this function is included as an example - improved upon further down this module
function arrayIteration() {
    var array = [1, 2, 3];
    for (var i = 0; i < array.length; i++) {
        // this function and its construct, provide opportunities to get it wrong!
        // unnecssary use of function-scoped variables...
        var current = array[i];
        console.log(current);
    }
}

arrayIteration();

// Actually forEach() is available as a standard method on arrays but we write out similar for illustration.
// get the looping behaviour to apply to an array argument...
function forEach(array) {
    for (var i = 0; i < array.length; i++)
        console.log(array[i]);
}
forEach(["Wampeter", "Foma", "Granfalloon"]);

// better still, get the loop to apply to an array argument and supply the behaviour we'd like to apply as an argument too
function forEachDo(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}
forEachDo(["Wampeter", "Foma", "Granfalloon"], console.log);

// an anonymous function is supplied as a parameter
var numbers = [1, 2, 3, 4, 5], sum = 0;
// here the body of the code is inside the anonymous function...
forEachDo(numbers, function(number) {
    sum += number; // (and 'number' can be supplied as a variable to be substituted for the loop element variable)
    //... as well as within the  parameters to be supplied to forEachDo(...)
});

//  This function uses a loop within a loop over a list of objects and then iterate through one of its array properties
function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!( event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}

var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true},
  /* and so on... */
];
// function that computes the ϕ coefficient from such an array like above
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
// To extract a two-by-two table for a specific event from this journal
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
// use forEach to make it a bit terser...
function gatherCorrelations(journal /* the array param*/ ) {
    var phis = {};
    // array forEach() is already standard on arrays it takes only one required argument: the function to be executed for each element.
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if (!( event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
}

