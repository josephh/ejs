// null and undefined objects have no properties in js - trying to access a member of either of those
// will result in TypeError, e.g. null.length

// the difference between the dot notation and square brackets (for access) is that
// e.g. Math.max 'max' must be a valid known property
// but
// e.g. Math['m' + 'a' + 'x'] expressions in square brackets are evaluated

// 1. Create an object via curly brace notation
// Each property is written as a name, followed by a colon, followed by an expression that provides a value for the property.
var entryObj = {
    day : "monday",
   "#tally" : 3, // Spaces and line breaks are not significant.
    caught : ["rainbow trout", "brown trout", 'grayling'],  // Properties whose names are not valid variable names or valid numbers have to be quoted.
    notForKeeping: false,
    alsoNotForKeeping: true,
};

// The delete operator
function deleteProp(prop){
    delete entryObj.notForKeeping;
    delete entryObj[prop]; // the in operator returns whether or not an object has the property or not
    console.log("Property \'notForKeeping\' still available in entryObj? " + ('notForKeeping' in entryObj));
};

// Javascript loop construct uses 'in', specifically for going over the 
// properties of an object. 
    // for (var event in map)
      // console.log("The value for object mapped to event : " + map[event]);
      
