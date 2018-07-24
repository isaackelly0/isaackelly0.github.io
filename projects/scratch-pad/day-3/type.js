// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use isarray method on value
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //test if value is an array
    

    if(typeof value === 'object'){
        if(Array.isArray(value)){
            return false;
        }
        //test for null value
        else if(value === null){
            return false;
        }
        //test for date
        else if(value instanceof Date){
            return false;
        }
        else {
            return true;
        }
    }
    else{
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //test for null
    if(typeof value === 'object'){
        if(value === null){
            return false;
        }
        //test for date
        else if(value instanceof Date){
            return false;
        }
    
        else {
            return true;
        }
    }
    else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //test for string
    if(typeof value === 'string'){
        return typeof value;
    }
    //test for array
    else if(Array.isArray(value)){
        return 'array';
    }
    //test for null
    else if(value === null){
        return 'null';
    }
    //test for boolean
    else if(typeof value === 'boolean'){
        return typeof value;
    }
    //test for undefined
    else if(typeof value === undefined){
        return 'undefined';
    }
    //test for number
    else if(typeof value === 'number'){
        return typeof value;
    }
    //test for date
    else if(value instanceof Date){
        return 'date';
    }
    //test for function
    else if(typeof value === 'function'){
        return typeof value;
    }
    else if(typeof value === 'object'){
        return typeof value;
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
