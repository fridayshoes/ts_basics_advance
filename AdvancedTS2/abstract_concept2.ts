// 1. THE ABSTRACT CLASS (The Incomplete Blueprint)
// The 'abstract' keyword prevents you from doing 'new Shape()'
abstract class Shape {

    // ABSTRACT METHOD: No body { } logic here.
    // This is just a "promise" that any shape (Circle, Square, etc.) 
    // WILL have a way to calculate its area.
    abstract area(): number; 
}

// 2. THE CONCRETE CLASS (The Implementation)
// When we 'extend' an abstract class, we MUST fill in the missing pieces.
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        // Even though Shape is abstract, we call super() to initialize 
        // the parent "link" in the background.
        super();
        this.radius = radius;      
    }

    // 3. PROVIDING THE DEFINITION
    // We take the "Incomplete" area method and make it "Complete."
    // If we forgot to write this method, TypeScript would show an error!
    area(): number { 
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    sideLength: number;

        constructor(sideLength: number) {
        super();this.sideLength = sideLength; }

        area(): number {
        return this.sideLength * this.sideLength;
    }
}

// --- TESTING THE RULES ---

// ❌ ERROR: TypeScript protects you here. 
// You can't have a "Generic Shape" because the computer wouldn't know how 
// to calculate its area.
// const s1 = new Shape(); 

// ✅ WORKS: Circle is a "Concrete" class because it provided the area logic.
const circle = new Circle(5);
console.log(`Area of Circle: ${circle.area()}`);

const square = new Square(4);
console.log(`Area of Square: ${square.area()}`);
