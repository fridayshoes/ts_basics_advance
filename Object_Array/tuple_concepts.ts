// --- THE TUPLE APPROACH ---
// Best for: Fixed-size data where the order is strictly defined (like GPS coordinates).
let personTuple: [string, number, string] = ["John", 30, "New York"];

// Accessing is done via INDEX (Numbers)
console.log(personTuple[0]); // "John"
console.log(personTuple[1]); // 30
console.log(personTuple[2]); // "New York"


// --- THE OBJECT APPROACH ---
// Best for: Most application data. Much easier to read and maintain.
interface User {
    name: string;
    age: number;
    city: string;
}

const personObject: User = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing is done via KEY (Labels)
console.log(personObject.name); // "John"
console.log(personObject.age); // 30
console.log(personObject.city); // "New York"
