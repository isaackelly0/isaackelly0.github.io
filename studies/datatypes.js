/*
 * 0. Datatypes 
 *
 * 1. Number: numbers that can be manipulated arithmatically
 *
 * 2. String: A series of characters (numbers, letters, and symols) surrounded by quotation marks
 *
 * 3. Boolean: true or false values
 *
 * 4. Array: an ordered list starting at 0
 *
 * 5. Object: a collection that uses key value pairs to store and access data
 *
 * 6. Function: a block of reusable code that executes its steps when called
 *
 * 7. undefined: when a variable is declared but not assigned a value, 
 *    when attempting to use this a reference error is thrown
 *
 * 8. null is used to empty a value, identifies as type object
 * 
 * 9. NaN: Not-a-Number, used mostly when checking if a value is type number before using an arithmetic operation
 *
 * 10. Infinity (and its negative counterpart, -Infinity) is effectively what it sounds like,
 *     it represents the number infinity and behaves like it in math functions, and can be sometimes returned
 *     by a function depending on what it does and if it reaches infinity (assuming such code doesn't crash).
 *
 * 11. Simple datatypes (like numbers, strings and booleans) don't collect more than one value,
 *     and when modified return a new one while discarding its original value. Complex types (like
 *     objects, arrays, and functions) CAN collect multiple values.
 *
 * 12. Another difference between complex and simple types is that simple types are copy by value, and
 *     complex types are copy by reference. This means when a simple type is declared and assigned a value,
 *     a second variable can be assigned that first variable and is given the same value, and if the value is
 *     changed for only one of them, the other variable's value is unaffected. When a complex type does the same thing
 *     however, the value for both appears differently, because the reference itself is what is copied, so once the reference
 *     is modified it changes for any complex variable that was assigned to that value.
 */
 
 // 1. Number //
 24;
 // 2. String //
 "A simple sentence"
 // 3. Boolean //
 true;
 false;
 // 4. Array //
 var myArray = [1,2,3,4,5];
 // 5. Object //
 var person = {
     firstName: "Isaac",
     lastName: "Kelly",
     age: 26
 };
 // 6. Function //
 function someThingHappens(parameter){//input here, in parameter
     parameter.push(6);//data id modified in some way
     return parameter;//the output is returned here
 }
 console.log(someThingHappens(myArray));
 // 7. Undefined //
 var noValue;//if logged to the console, prints undefined
 // 8. Null //
 var flag = {
  firstColor: "red",
  secondColor: "white",
  thirdColor: "blue"
 };
 flag = null;//prints null if logged to the console
 // 9. NaN //
 console.log(isNaN("string"));//prints true
 // 10. Infinity //
 var andBeyond = Infinity;
 console.log(andBeyond);//prints infinity
 console.log(1/andBeyond);//prints zero
 // Copy by value vs Copy by reference //
 var simple1 = 5;
 var simple2 = simple1;
 simple2 += 5;
 console.log(simple1);//print 5
 console.log(simple2);//print 10
 var robot = person;
 robot.firstName = "Bender";
 console.log(person.firstName);//prints Bender since the reference was changed