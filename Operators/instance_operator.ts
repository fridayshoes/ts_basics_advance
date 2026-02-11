// The instanceof operator is a powerful tool for type checking at runtime. It doesn't just 
// check what a variable "looks like"; it checks the DNA (the lineage) of the object 
// to see if it was born from a specific class.

// In your code, you are using Inheritance, which creates a "Parent-Child" relationship between classes.

// 1. THE CLASS HIERARCHY (Inheritance)
// 'Animal' is the Base Class (The Parent).
class Animal { }

// 'Dog' is a Derived Class (The Child). 
// 'extends Animal' means a Dog IS an Animal.
class Dog extends Animal { }

// 'Cat' is also a Derived Class.
// It also inherits everything from Animal.
class Cat extends Animal { }

// 2. CREATING INSTANCES
// We use 'new' to create actual objects based on the blueprints above.
let dog = new Dog();
let cat = new Cat();

// 3. THE INSTANCEOF CHECKS
// Does 'dog' come from the 'Dog' blueprint? Yes.
console.log(dog instanceof Dog);    // true 

// Does 'dog' come from the 'Animal' blueprint? 
// Yes, because Dog extends Animal! (The "Is-A" Relationship)
console.log(dog instanceof Animal); // true 

// Does 'cat' come from the 'Cat' blueprint? Yes.
console.log(cat instanceof Cat);    // true 

// Does 'cat' come from the 'Animal' blueprint? Yes.
console.log(cat instanceof Animal); // true 

// 4. THE CROSS-CHECKS
// Is a dog a cat? No. They share a parent, but they are different branches.
console.log(dog instanceof Cat);    // false 

// Is a cat a dog? No.
console.log(cat instanceof Dog);    // false