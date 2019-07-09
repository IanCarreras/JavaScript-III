/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding happens when the 'this' keyword is connected to the global object.  'This' used outside of any written function/object will refer to the global context/the window object.
* 2. Implicit binding is when the 'this' keyword is used inside of a function/object to refer to the function/object it is immediately inside of.  
* 3. New binding is the 'this' keyword used inside of a constructor function and refers to a specific instance of an object the was created and returned by the constructor function.
* 4. Explicit binding occurs when using the .call() and .apply() methods.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const object = {
    "name": "createdObject",
    "identify": function() {
        return `${this.name} is my name.`
    }
}

// Principle 3

// code example for New Binding
function Constructor(attrs) {
    this.name = attrs.name
}

const construction = new Constructor({
    name: 'construction'
})


// Principle 4

// code example for Explicit Binding
function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = attrs.dimensions;
}

function CharacterStats(characterStatsAttrs) {
  GameObject.call(this, characterStatsAttrs)
  this.healthPoints = characterStatsAttrs.healthPoints;
}