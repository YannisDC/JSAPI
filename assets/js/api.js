// Self Invoking Function Notation 
var selfInvokingFunction = (function() {
  var privateVariable = "private";
  var publicVariable = "public";
  
  function privateFunction() {
    console.log("You can not call this function from the outside");
  }
  
  function publicFunction() {
    console.log("This function can be called from the outside");
  }
  
  return {
    publicVariable: privateVariable,
    publicFunction: publicFunction
  }
  
})();

console.log("Using the Self Invoking Function\n");

// Passed by reference, directs each instance to the same Self Invoking Function
var instance = selfInvokingFunction;
var instance2 = selfInvokingFunction;

console.log(instance.publicVariable);
instance2.publicVariable = "changed";
console.log(instance.publicVariable); // Changed the value globally

console.log(instance.privateVariable); // Not accessible