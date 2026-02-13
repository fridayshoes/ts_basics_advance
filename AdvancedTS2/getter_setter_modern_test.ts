class Placement2 {
    // 1. PRIVATE BACKING FIELDS
    // We use the underscore prefix (_) to differentiate the private variable 
    // from the public getter/setter name.
    private _name: string;
    private _experience: number;
    private _techStack: string;

    constructor(name: string, experience: number, techStack: string) {
        this._name = name;
        this._experience = experience;
        this._techStack = techStack;
    }

    // 2. THE GETTERS
    // These allow you to read the value like a property: candidate.name
    get name(): string {
        return this._name;
    }

    get experience(): number {
        return this._experience;
    }

    get techStack(): string {
        return this._techStack;
    }

    // 3. THE SETTERS
    // These allow you to assign values: candidate.name = "Alice"
    // Setters are perfect for adding validation logic.
    set name(value: string) {
        if (value.trim().length > 0) {
            this._name = value;
        } else {
            console.error("Invalid Name: Name cannot be empty.");
        }
    }

    set experience(value: number) {
        if (value >= 0) {
            this._experience = value;
        } else {
            console.error("Invalid Experience: Cannot be negative.");
        }
    }

    set techStack(value: string) {
        this._techStack = value;
    }

    // 4. BUSINESS LOGIC
    fetchDetails(): string {
        return `Name: ${this._name}, Tech Stack: ${this._techStack}`;
    }

    processCandidate(): void {
        if (this._experience > 5) {
            console.log(`Selected Candidate: ${this._name}`);
        } else {
            console.log(`Candidate ${this._name} does not meet requirements.`);
        }
    }
}

// --- USAGE ---

const candidate1 = new Placement2("Alice", 6, "JavaScript");

// Look how much cleaner this is! No parentheses () needed.
console.log(candidate1.name); // Triggers the 'get name()'

candidate1.experience = 7;    // Triggers the 'set experience(value)'
candidate1.processCandidate();

// This will trigger our validation error
candidate1.experience = -5;   // Output: Invalid Experience: Cannot be negative.