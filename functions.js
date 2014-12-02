// functions can see variables that are within its lexical scope

// position within a script's text determines the variables a function can see
// and in JS, functions are the only thing that can create a new scope (not 
// blocks per se).

var f = function(s){  // this is one way to declare a function - assign a var
    console.log("value passed in was " + s);
    return;  // return with nothing specified sends back Undefined 
};

function power(base, exponent){  // or use the keyword at the beginning of statement
    power = base;
    for(var i = 0; i < exponent-1; i++)
        power *= base;
    
    console.log("power of " + base + " raised to the exponent " + exponent  
      + " = " + power);
    return base;  
};



