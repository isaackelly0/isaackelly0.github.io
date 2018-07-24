/*
 * 0. Manipulating strings can be pretty easy in javascript, with an operator to add values
 *    and methods to find specific elements or change the string itself.
 *
 * 1. With the plus sign (+) we can add two strings together to make a new one, or 
 *    use the += operator to add a value onto a preexisting string. This is called concatenation. 
 *
 * 2. Methods allow us to find certain properties of a string, where they are if they exist, 
 *    edit them, or even change a string into an array and vice versa.
 */
 // Operators //
 var firstName = "Isaac";
 var lastName = "Kelly";
 var fullName = firstName + " " + lastName;
 console.log(fullName);//prints Isaac Kelly
 var bestMovie = "Star";
 bestMovie += " Wars";
 console.log(bestMovie);//prints Star Wars
 // Methods //
 var shopList = "Butter, Bread, Milk, Eggs";
 var newList = shopList.split(",");
 console.log(newList); //prints an array made from string's split method
 console.log(shopList.indexOf("Milk"));//prints the index where milk is found in the variable shopList