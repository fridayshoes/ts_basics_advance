class Placement {
    // 1. PRIVATE FIELDS
    // These cannot be accessed directly via 'candidate1.name'. 
    // They are "hidden" inside the class instance.
    private name: string;
    private experience: number;
    private techStack: string;      

    // 2. CONSTRUCTOR
    // Sets the initial state of the candidate when 'new Placement()' is called.
    constructor(name: string, experience: number, techStack: string) {
        this.name = name;
        this.experience = experience;
        this.techStack = techStack;
    }

    // 3. GETTER AND SETTER METHODS
    // These are standard functions that act as a bridge to the private data.
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        // You could add validation here, e.g., checking if name is empty
        this.name = name;  
    }

    // (Similar methods follow for Experience and TechStack...)
    getExperience(): number { return this.experience; }
    setExperience(experience: number): void { this.experience = experience; }

    getTechStack(): string { return this.techStack; }
    setTechStack(techStack: string): void { this.techStack = techStack; }

    // 4. BUSINESS LOGIC METHODS
    // These methods use the internal data to perform specific tasks.
    
    // Returns a formatted string of the candidate's basic info.
    fetchDetails(): string {
        return `Name: ${this.name}, Tech Stack: ${this.techStack}`;
    }

    // Checks the experience and determines if the candidate is selected.
    processCandidate(): void {
        if (this.experience > 5) {
            console.log(`Selected Candidate: ${this.name}`);
        } else {
            console.log(`Candidate ${this.name} does not meet the experience requirement.`);
        }      
    }
}  

// --- EXECUTION ---

// Creating instances (objects) of the Placement class
const candidate1 = new Placement("Alice", 6, "JavaScript");
const candidate2 = new Placement("Bob", 4, "Python");

// Accessing data through the public methods
console.log(candidate1.fetchDetails()); 
console.log(candidate2.fetchDetails()); 

// Running the selection logic
candidate1.processCandidate(); // Selected (Experience 6 > 5)
candidate2.processCandidate(); // Not Selected (Experience 4 < 5)