// Real-World Example: Payment Processing
// Think of a checkout system. Every payment method (Credit Card, PayPal, Crypto) 
// needs to "Process" a payment, but the logic for each is totally different.


// 1. THE ABSTRACT CLASS (The Template)
// You cannot do: const p = new Payment();
abstract class Payment {
    constructor(public amount: number) {}

    // Regular Method: All payments share this same logic
    printReceipt(): void {
        console.log(`Receipt: Paid $${this.amount}`);
    }

    // ABSTRACT METHOD: No code here! 
    // This is a "contract" that says: 
    // "Any child class MUST implement its own version of processPayment."
    abstract processPayment(): void;
}

// 2. CHILD CLASS: Credit Card
class CreditCardPayment extends Payment {
    constructor(amount: number, private cardNumber: string) {
        super(amount);
    }

    // Fulfilling the contract
    processPayment(): void {
        console.log(`Processing $${this.amount} via Credit Card Ending in ${this.cardNumber.slice(-4)}`);
    }
}

// 3. CHILD CLASS: PayPal
class PayPalPayment extends Payment {
    constructor(amount: number, private email: string) {
        super(amount);
    }

    // Fulfilling the contract differently
    processPayment(): void {
        console.log(`Redirecting to PayPal for user: ${this.email}...`);
    }
}

// --- EXECUTION ---

const order1 = new CreditCardPayment(100, "1234567890123456");
order1.processPayment(); // Unique logic
order1.printReceipt();   // Shared logic

const order2 = new PayPalPayment(50, "user@example.com");
order2.processPayment(); // Unique logic
order2.printReceipt();   // Shared logic