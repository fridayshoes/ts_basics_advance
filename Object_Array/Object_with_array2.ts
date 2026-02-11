// 1. DATA MODELING (The Shape)
// We define a 'Pilot' type so that every pilot added to our list 
// follows the exact same structure (name, age, skills).
type Pilot = {         
    name: string;
    age: number;
    skills: string; // Currently stored as a single string of text
};


// 2. ARRAY INITIALIZATION
// 'Pilot[]' tells TypeScript: "This variable is a List containing only Pilot objects."
// We use square brackets [ ] to create the list and curly braces { } for each item.
let pilots: Pilot[] = [
    {
        name: "David Skywalker",  
        age: 30,
        skills: "Flying, Navigation, Communication"
    },
    {
        name: "Bruce McDuffle",
        age: 28,
        skills: "Cargo Handling, Safety Protocols, Weather Analysis"
    },
    {
        name: "Alice Dive Bomber Jones",
        age: 35,
        skills: "Helicopter Operations, Search and Rescue, Night Flying"
    }
];

// 3. BULK OUTPUT
// Prints the entire array structure (all 3 pilots) at once.
console.log(pilots);

// 4. INDEX-BASED ACCESS
// Arrays start counting at 0. 
console.log(pilots[0]); // Accesses David (Position 0)
console.log(pilots[1]); // Accesses Bruce (Position 1)
console.log(pilots[2]); // Accesses Alice (Position 2)

// 5. DEEP ACCESS (Dot Notation)
// We jump into the array index first, then pick the property we want.
console.log("Pilot 1 Name: " + pilots[0].name);    // Gets David's Name
console.log("Pilot 2 Age: " + pilots[1].age);      // Gets Bruce's Age
console.log("Pilot 3 Skills: " + pilots[2].skills); // Gets Alice's Skills