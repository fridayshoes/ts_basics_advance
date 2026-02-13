// --- METHOD OVERRIDING IN TYPESCRIPT ---

// This code demonstrates Method Overriding. Unlike an abstract class where the child must fill in a missing piece, 
// method overriding allows a child class to take an existing, working method from the parent and "re-write" it 
// to better suit its own needs.



// 1. THE BASE CLASS (The General Version)
class Base {
    // This is a "Default" implementation. 
    // It works on its own if no one changes it.
    greet(): void {
        console.log("Hello from Base class!");
    }  
}
    
// 2. THE DERIVED CLASS (The Specialized Version)
class Derived extends Base {
    // METHOD OVERRIDING:
    // We use the exact same name ('greet') and the same return type ('void').
    // This "hides" the parent's version when called from a Derived object.
    greet(): void {
        console.log("Hello from Derived class!");
    }
}

// 3. ANOTHER DERIVED CLASS (Even More Specialized)
class AnotherDerived extends Derived {
    greet(): void {
        console.log("Hello from AnotherDerived class!");
    }
}

  // --- EXECUTION ---

// The Base class uses its own logic.
const baseInstance = new Base();
baseInstance.greet(); // Output: Hello from Base class!

// The Derived class ignores the Base logic and uses its "Override" logic.
const derivedInstance = new Derived();
derivedInstance.greet(); // Output: Hello from Derived class!

// AnotherDerived overrides Derived's greet method
const anotherDerivedInstance = new AnotherDerived();
anotherDerivedInstance.greet();  // Output: Hello from AnotherDerived class!
