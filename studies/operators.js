/*
 * 0. Operators in Javascript are an easy way for use to modify or check data.
 *
 * 1. Assignment operators give a variable a value, either its initial one or override with a new one.
 *
 * 2. Arithmetic operators can add, subtract, multiply, or divide the value with another. 
 *
 * 3. Comparison operators generate a boolean value by comparing two values to see if one is 
 *    greater than, less than, or equal another.
 *
 * 4. Logical operators help decide if a code is executed when checking two conditions,
 *    whether they both need to be true or at least one can be. 
 *
 * 5. Unary operators use only one character to perform an action on a variable's value.
 *    Bang (!) makes a value read as false, typeof can tell you a value's datatype, although things
 *    with this operator get wonky with object-related types, and delete makes the value of an 
 *    array's index undefined.
 *
 * 6. Ternary operators can check if a condition is met, and execute code if 
 *    it is or even if it isn't on a single line of code.
 */
 // Assignment //
 var aThing = 2; //assigns aThing value 2
 var newThing = 5;
 // Arithmetic //
 var anotherThing = aThing + 3; //adds 3 to aThing, the value is now 5 for anotherThing 
 newThing--;//decremented, the value is now 4
 var thisThing = newThing - aThing;//thisThing equals the difference between 4 and 2, which is 2
 /* When combined with the assignment operators, arithmetic operators work now work
    as assignment operators that modify the variable's initial value */
 thisThing *= anotherThing;//thisThing is multiplied by anotherthing's value, 5 * 2 = 10
 // Comparison //
 10 > 5; //evaluates true
 10 >= 100;//evaluates false
 thisThing !== 10;//evaluates false
 newThing === 4;//evaluates true
 // Logical //
 if(10 > 0 && 5 < 6){
     console.log("These conditions are bboth true!");//prints a string since both conditions are met
 }
 if(10 > 5 || 5 > 6){
     console.log("One of these condtions is true!");//since one condition is met, prints to the console
 }
 // Unary //
 var theTruth = true;
 console.log(!theTruth);//prints false
 console.log(typeof theTruth);//prints "boolean"
 var myArr = [1,2,3,4];
 delete myArr[1];
 console.log(myArr);//prints [1,undefined,3,4]
 // Ternary //
 (10 > 9) ? "that is true" : "that isn't true";//evaluates to "that is true"
 (10 > 100) ? "that doesn't make sense" : "That's completely wrong";
 //evaluates to the false condition, would return "That's completely wrong"