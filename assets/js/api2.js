// Object Literal notation
var objectLiteral = {
    // All variables are publically accessible
    firstVariable : "publically accessable",
    secondVariable : "also publically accessable",
    firstFunction : function() {
        this.firstVariable = "changed";
    }
};

console.log("\n\nUsing the Object Literal\n");

// Passed by reference, directs each instance to the same Object Literal
var firstOne = objectLiteral;
var secondOne = objectLiteral;

console.log(firstOne.firstVariable);
secondOne.firstFunction();
console.log(firstOne.firstVariable); // Changed the value globally