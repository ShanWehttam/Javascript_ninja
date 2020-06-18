//Destructuring an array or a string gives an index of each element
  {...[1,2,3]} {..."1,2,3"}
//parsefloat instead of parseInt because they're both stricter than Number.  Number() allows strings
  parseInt("564367457868423.00")
//break and continue can only be used within for loop statements.  I shouldn't need these when i have .filter
//Break will exit the parent for loop
//You must return a multiline function
//Return can’t be used in a for loop

//return stops the function there and then
//paralell assignment to an expression that returns an array
  [one, two] = [<array of some sort>]
//An iterable is a type of Object that can have a 'for of' loop or length used on it.  Strings and Arrays are Iterables.  Not Objects
//Strict mode stops us from declaring a variable without const or let
  "use strict"
//prefer full paths over css short cuts
  document.querySelector('[class="dropdown-content"] :nth-child(3)') // document.querySelector('a:last-child')
//Many ways to get the instance of a type
  "String".constructor()
  "String".constructor
  typeof "string"
  'string'.__proto__
  String.prototype
//Javascript interperets {} as a block so we need to wrap the block in perens ({})
//arrow functions dont work with 'this'.  They don't recognise it.
//arrow functions are not hoisted
//The prototype is like the interface
  instance_methods = Object.getOwnPropertyNames(‘me’.__proto__) // get functions and properties that were instantiated outside the class/constructor
  instance_methods2 = Object.getOwnPropertyNames(String.prototype) // get functions and properties that were instantiated outside the class/constructor
//





