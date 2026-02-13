// What are Decorators in TypeScript?

// Decorators in TypeScript are a powerful feature that allows you to add metadata
//  and modify the behavior of classes, methods, properties, or parameters at design time.
 
// They are a form of declarative programming that can be used to enhance the functionality
//  of your code without modifying the original implementation.
 
// Decorators are defined using the @ symbol followed by the decorator name. :(Java -- Annotations)

// When a decorator is applied, it receives information about the target it is
// decorating and can modify its behavior or add additional functionality.    
// 


// Usually decorators are predefined eg. @MeasureTime but you can also create a function
// for a 'custom' class decorator


// 1. THE DECORATOR DEFINITION
// A Class Decorator receives the constructor function of the class as its 'target'.
function LogClassMore(target: Function) {
    // This code runs as soon as the script loads and sees the @LogClassMore tag.
    console.log(`Class ${target.name} has been decorated.`);
}  

function LogClassMore2(target: Function) {
    // This code runs as soon as the script loads and sees the @LogClassMore tag.
    console.log(`Class ${target.name} has been decorated again.`);
}  


// 2. APPLYING THE DECORATOR
// The '@' symbol tells TypeScript to pass 'MyClass' into the 'LogClassMore' function.

@LogClassMore
@LogClassMore2
@LogClassMore
@LogClassMore2
@LogClassMore2 // 
class MyClass {
    constructor() {
        // This runs later, only when you use the 'new' keyword.
        console.log("MyClass instance created.");
    }
}
 
// 3. EXECUTION
// Notice the order of logs: 
// 1st: "Class MyClass has been decorated" (Happens at definition time)
// 2nd: "MyClass instance created" (Happens at instantiation time)
const myClassInstance = new MyClass(); 
 
console.log(myClassInstance);