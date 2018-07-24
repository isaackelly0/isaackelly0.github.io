// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //make contact object
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //contacts is an array
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
            
        },
        //api to add contact to contact list
        addContact: function(contact){
            //push new contact into array
            contacts.push(contact);
        },
        //api to find if a given name exists in the contacts array
        findContact: function(fullName){
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){
                    return contacts[i];
                }
                else{
                    return undefined;
                }
            }
        },
        //api to remove contact from contact list
        removeContact: function(contact){
            //splice the contact out 
            return contacts.splice(contacts, 1);
            
            
        },
        printAllContactNames: function(){
            //array to strore full names
            var list = [];
            //string array for the multi line list
            var result;
            for(var j = 0; j < contacts.length; j++){
                
                list[j] = contacts[j].nameFirst + " " + contacts[j].nameLast;//assign names to list incrementally
                result = list.join("\n");//join with new line character to make a list
                
            }
            return result;//get list of names back
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
