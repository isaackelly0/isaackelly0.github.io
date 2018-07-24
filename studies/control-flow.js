/* 0. Control Flow is the use of conditionals to control the flow of data in a program
 * 
 * 1. One of these ways is through ifs, elses, and if-else statements. If and else-if can be
 *    paired with a conditional in parenthesis, and a block of code within curly braces
 *    meant to be executed upon the condition being met, else will run a code if none of the conditions are met.
 *
 * 2. Switch statements are another way to control the flow of code, using cases for each condtional. 
 *    Switch will take an argument and check to see if the data passed matches any of its cases, if so 
 *    that case's code block will execute and then break. 
 */
 // Ifs and elses //
 var myNum = 3; 
 if (myNum < 0){//this condition is not met, move to else if
     console.log("This number is negative");
 }
 else if(myNum === 0){//this condition also isn't met, move to else
     console.log("This number is zero");
 }
 else{
     console.log("This number is positive");//prints string that the number is positive
 }

// Switch //

 var someColor = "red";
 switch(someColor){//check cases
     case "white"://red does not equal white, check next case
         console.log("this color is white");
         break;
     case "blue"://red doesn't equal blue, next case
         console.log("this color is blue");
         break;
     case "red"://this case matches our argument, execute this code block
         console.log("this color is red");//prints that this color is red to the console
         break;
     default:
        console.log("this color is not on the american flag");
 }