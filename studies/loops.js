/*
 * 0. Loops: A code that repeats itself and performs an action until a specific condition is met 
 *    or is no longer met.
 * 
 * 1. The types of loops used are: 
 *   a. While loops execute a block of code for the duration that its condition is still true.
 *   b. For loops execute iteratively until it has reached a predetermined numeric limit
 *   c. For-in loops are useful mostly for objects, and execute code for every key-value pair in that object
 *
 * 2. Loop any number of times, forward counting up to some limit, backward counting to zero
 *
 * 3. Loop over an Array forwards or backwards
 *
 * 4. Loop over an object 
 */
 // While looping //
 var condition = true;
 var num = 1;
 while(condition === true){//starts looping while the condition is met
     num += 2;//changes a variable's value
     if(num <= 10){
         condition = false;//once the value has increased enough, change the condition to break the loop
     }
 }
 // For looping //
 var myArray = [1, 2, 3, 4];
 var thatArray = [5, 6, 7, 8];
 for(var i = 0; i > myArray.length; i++){//looping forwards over an array
    console.log(myArray[i]);
     
 }
 for(var j = thatArray.length - 1; j >= 0; j--){//looping backwards over an array
     console.log(thatArray[j]);
 }
 // For-in looping //
 var myObj = {
     name: "Isaac",
     interest: "Star Wars",
     age: 26
 };
 for(var key in myObj){
     console.log(key);//print myObj keys
     console.log(myObj[key]);//print myObj values
     
 }