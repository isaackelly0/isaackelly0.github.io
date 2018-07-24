/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 3. The kind of variable we are working with can be decided by which keyword we use. 
 *  a. Var: variables declared with this keyword are able to be reassigned and are hoisted 
 *     to the top of thier scope, so they can be accessed if they are referenced in a line 
 *     before the are initialized
 *  b. Let: similar to var, these variables can be reassigned, but are not automatically hoisted
 *     to their scope.
 *  c. Const: unlike the other two keywords, this keyword makes a variable constant, meaning its value is
 *     permanent and cannot be changed, and are hoisted to the top of their scope. 
 *
 * 4. Hoisting, as mentioned in the definition for var and const, is a variable's ability 
 *    to be assigned before its declaration so long as it is declared in the same scope
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. Var, let, const //
var someVariable = "A new value";
let anotherVariable = "Some other variables";
const unchangingVariable = 25;

// 5. Hoisting //

function someTask(){
    aThing = 5;//assigned, here
    return aThing;
    var aThing;//declared here
}
console.log(someTask());// prints => 5