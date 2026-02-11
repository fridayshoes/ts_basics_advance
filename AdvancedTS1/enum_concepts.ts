// 1. DEFINING THE ENUM
// By default, Enums are "Zero-indexed." 
// This means the first item is 0, the second is 1, and so on.
enum DaysOfWeek {
    Sunday,    // 0
    Monday,    // 1
    Tuesday,   // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,    // 5
    Saturday   // 6
}

// 2. ACCESSING BY NAME (Value Lookup)
// We treat 'DaysOfWeek' like an object. 
// Even though we see 'Wednesday', the computer stores '3'.
let today: DaysOfWeek = DaysOfWeek.Wednesday;
console.log(today); // Output: 3

// 3. ACCESSING BY INDEX (Reverse Mapping)
// TypeScript Enums are unique because they support "Reverse Lookup."
// You can provide the number, and it will give you the string name back.
const dayName: string = DaysOfWeek[0];
console.log(dayName); // Output: Sunday