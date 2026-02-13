// Task

// Create Interface  Order

//          We need data as
//               ProductName
//               ProductCost
//               ProductDiscount
//               ProdeCode

// We need to create Class to Process to Accept the Order Item

// Create two methods in the Class

// 1)Print the Values name function as DispData

// 2)Also Based on discount Value If Any Product Gives Above 50% 
// discount Print Them Name Method As Process.






// 1. THE INTERFACE
// This defines the "shape" of our product data.
interface Order {
    productName: string;
    productCost: number;
    productDiscount: number; // e.g., 60 for 60%
    productCode: string;
}

// 2. THE PROCESSING CLASS
class OrderProcessor {
    // We can pass an object that follows the 'Order' interface into our class
    processOrder(item: Order): void {
        this.dispData(item);
        this.process(item);
    }

    // Method 1: Print the product values
    dispData(item: Order): void {
        console.log("--- Product Details ---");
        console.log(`Name: ${item.productName}`);
        console.log(`Code: ${item.productCode}`);
        console.log(`Cost: $${item.productCost}`);
        console.log(`Discount: ${item.productDiscount}%`);
    }

    // Method 2: Check for High Discounts (Above 50%)
    process(item: Order): void {
        if (item.productDiscount > 50) {
            console.log(`🔥 HIGH DISCOUNT ALERT: ${item.productName} is currently ${item.productDiscount}% OFF!`);
        } else {
            console.log(`Note: ${item.productName} has a standard discount.`);
        }
        console.log("------------------------\n");
    }
}

// --- EXECUTION ---

// Creating two objects that follow the Order interface
const item1: Order = {
    productName: "Mechanical Keyboard",
    productCost: 120,
    productDiscount: 60, // Above 50%
    productCode: "KB-99"
};

const item2: Order = {
    productName: "USB-C Cable",
    productCost: 15,
    productDiscount: 10, // Below 50%
    productCode: "CB-01"
};

const processor = new OrderProcessor();

processor.processOrder(item1); // Will trigger the High Discount message
processor.processOrder(item2); // Will print details normally