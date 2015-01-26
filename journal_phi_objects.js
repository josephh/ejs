// Functions and object declarations to illustrate aspects of arrays, objects and higher order functions

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
// function that computes the ϕ coefficient from an array like the above
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
    // array forEach() is a standard method on arrays it takes only one required argument: the function to be executed for each element.
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if (!( event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
}
  