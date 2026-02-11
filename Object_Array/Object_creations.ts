// 1. Define the Interface (The Blueprint)
interface Person {
    name: string;
    age: number;
    city: string;
    occupation: string;
    email?: string; // The '?' makes this field optional
}

// 2. Initialize the Object using the Interface
const person: Person = {
    name: "Ant Smith",  
    age: 45,
    city: "Newcastle",
    occupation: "TV presenter"
};

// 3. Accessing properties (Same as your code)
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.occupation);
 