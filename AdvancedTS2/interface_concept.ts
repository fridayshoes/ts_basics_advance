// 1. THE INTERFACE (The Contract)
// This tells TypeScript: "Any object that calls itself a Person6 
// MUST have these three specific properties with these types."
interface Person6 {
    name: string;
    age: number;
    city: string;
}

// 2. THE FUNCTION (The Enforcement)
// By typing the parameter as 'Person6', this function will ONLY 
// accept objects that follow the Person6 interface.
function displayPersonInfo(person6: Person6): void {
    console.log(`Name: ${person6.name}, Age: ${person6.age}, City: ${person6.city}`);
}    

// 3. OBJECT CREATION (Fulfilling the Contract)
// We create plain JavaScript objects. Because we added ': Person6',
// TypeScript checks if we included all the required fields.
const person6: Person6 = {
    name: "John",
    age: 30,
    city: "New York"
};

const person7: Person6 = {
    name: "Amit",
    age: 30,
    city: "New York"
};

const person8: Person6 = {
name: "Sara",
age: 25,
city: "Los Angeles"
};

const person9: Person6 = {
name: "Mike",
age: 40
} // city: "Chicago" --- ERROR: Missing 'city' field. TypeScript will stop you here. }; // 4. USAGE // Since person6 and person7 follow the "shape," they are allowed here. displayPersonInfo(person6); displayPersonInfo(person7); displayPersonInfo(person8); // displayPersonInfo(person9); // ❌ ERROR: TypeScript protects you here. 'person9' is missing the 'city' property, so it doesn't meet the Person6 contract.




// 4. USAGE
// Since person6 and person7 follow the "shape," they are allowed here.
displayPersonInfo(person6); 
displayPersonInfo(person7);
displayPersonInfo(person8);
displayPersonInfo(person9); // ❌ ERROR: TypeScript protects you here. 'person9' is missing the 'city' property, so it doesn't meet the Person6 contract. 