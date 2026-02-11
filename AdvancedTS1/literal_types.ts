// Literal types are one of the best ways to prevent "magic strings" or typos in your code. 
// While a string type allows any text, a Literal Type restricts a variable to an exact set of allowed values.


// 1. DEFINING THE LITERAL UNION
// Instead of allowing any string, we define a list of specific allowed strings.
// Think of this as a "Custom Restricted String."
type Direction = "North" | "South" | "East" | "West";

// 2. USING THE TYPE IN A FUNCTION
// The 'direction' parameter MUST be one of the four words defined above.
function move(direction: Direction): void {
    console.log("Moving " + direction);
}

// 3. VALID USAGE
// These work perfectly because they match the 'Direction' blueprint exactly.
move("North"); 
move("South");
move("East");
move("West");

// 4. THE ERROR (Safety in action)
move("Up"); 
// ERROR: TypeScript knows "Up" is not part of the 'Direction' list.
// This prevents bugs where someone might type "north" (lowercase) or "N" 
// when the rest of the app expects "North".