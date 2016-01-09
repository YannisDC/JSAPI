// Object Prototypal notation
var ObjectPrototypal = function(data) {
  // All variables are publically accessible
  this.firstVar = data;
  this.secondVar = "Second Variable";
};

ObjectPrototypal.prototype.changeFirstVar = function() {
  var localVar = "changed";
  this.firstVar = localVar;
  return this;
}

ObjectPrototypal.prototype.changeSecondVar = function(changeWith) {
  this.secondVar = changeWith;
  return this;
}

console.log("\n\nUsing the Object Prototype\n");

// Passed by value, make a copy for each new instance
var firstInstance = new ObjectPrototypal("First Instance");
var secondInstance = new ObjectPrototypal("Second Instance");

console.log("First Instance: " + firstInstance.firstVar);
console.log("Second Instance: " + secondInstance.firstVar);

firstInstance.changeFirstVar();

console.log("----- The First variable of the First Instance is changed -----");
console.log("First Instance: " + firstInstance.firstVar);
console.log("Second Instance: " + secondInstance.firstVar);


firstInstance.changeSecondVar("Something else 1");
secondInstance.changeSecondVar("Something else 2");
console.log("");
console.log("----- The Second variable of both Instances is changed -----");
console.log("First Instance: " + firstInstance.secondVar);
console.log("Second Instance: " + secondInstance.secondVar);