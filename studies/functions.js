/*
 * 0. Functions: A block of code that can be repititively used and called to perform a specific action 
 *    to prevent rewriting code
 * 
 * 1. To use a function, you first have to declare it using the function keyword and then parenthesis with whatever
 *    parameters necessary inside. Then you must call the function with the arguments passed in parenthesis.
 *
 * 2. Parameters are the containers for values to be passed in to the function to be used or manipulated,
 *    arguments are the values passed in to the function call that will be assigned to the parameters
 * 
 * 3. Any function that is not anonymous is named, use the function keyword, the function's name,
 *    parenthesis, and parameters within the parenthesis.
 *
 * 4. Since functions are first-class objects, they can be assigned as values to variables much like primitive datatypes,
 *    just use the var keyword and the name of your variable and assign the function to that variable
 *
 * 5. Input is decided by the parameters in the function declaration, and output is the values that are returned after 
 *    the function is done executing its code
 *
 * 6. Scope for functions works almost like a reverse hierarchy, the more nested the functions become the less access granted
 *    the outer functions. Functions can access global variables and their own local variables, but if a function forms within that function,
 *    the inner functions have access to more variables, the global variables, its parent function local variables, and its own local variables.
 *    and the further inward to nesting functions the data travels, the more access the child functions have and proportionately less for the parents.
 *    This feature, that allows nested functions to access to outer variables and forbids access to its local variables is called closure. 
 */
 var publicThing = 25;//this is a global variable, any function can use it
 function someAction(number){
     var localThing = 75;//this function can access this variable, but is not used outside
     number += localThing;
     function anotherAction(number){
         var closedThing = 50;//this variable is local to the nested function. by way of closure it cannot be accessed by the parent function
         number -= closedThing;//function accesses its own local variable
         number+= publicThing;//nested function accesses its parent variable
         number += localThing;//function accesses global variable
         return number;//this returns the desired output
     }
     return anotherAction(number);//call the nested function after executing initial parent function has done its task
 }
 var arg = 5;
 console.log(someAction(arg));//argument passed to the function as input and print final result: 130