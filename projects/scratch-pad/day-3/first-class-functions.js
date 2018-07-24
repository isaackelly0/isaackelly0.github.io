// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //test for number
    if(typeof base === 'number'){
        //compare against a given value using a function
        return function (given){
            if(given > base){
                return true;
            }
            else{
                return false;
            }
        }
    }
    //test for string 
    if(typeof base === 'string'){
        //ret
        return function(given){
            if(given > base){
                return true;
            }
            else{
                return false;
            }
        }
        
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    if(typeof base === 'number'){
        return function(given){
            if (given < base){
                return true;
            }
            else{
                return false;
            }
        }
    }
    if(typeof base === 'string'){
        return function(given){
            if (given < base){
                return true;
            }
            else{
                return false;
            }
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return function to accept given argument
    return function(given){
        //reduce both given and base to same case
        var newStartsWith = startsWith.toLowerCase();
        var newGiven = given.toLowerCase();
        //test with new vars to see if they match
        if (newStartsWith === newGiven[0]){
            return true;
        }
        else{
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return function
    return function(given){
        //reduce both to same case
        var newEndsWith = endsWith.toLowerCase();
        var newGiven = given.toLowerCase();
        //test using new vars to see if values equal
        if(newEndsWith === newGiven[newGiven.length - 1]){
            return true;
        }
        else{
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // new array to store modified strings
    var newArray = []
    //for loop to modify strings and assign them to a new array
    for(var i = 0; i < strings.length; i++){
        newArray[i] = modify(strings[i]);
    }
    return newArray;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //new array to store booleans
    var newArray = [];
    //for loop to iteratively test strings
    for(var i = 0; i < strings.length; i++){
        newArray[i] = test(strings[i]);
    }
    if (newArray.includes(false)){
        return false;
    }
    else{
        return true;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}