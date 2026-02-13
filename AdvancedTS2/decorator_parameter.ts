// 1. THE DECORATOR DEFINITION
// Unlike method decorators, this one takes three specific arguments:
// - target: The class prototype (Calculator.prototype)
// - propertyKey: The name of the method where the parameter lives ('add')
// - parameterIndex: The position of the parameter in the list (0 for 'a', 1 for 'b')
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter at index ${parameterIndex} in method ${propertyKey} has been decorated.`);
}

class Calculator {
    // 2. APPLYING THE DECORATOR
    // We place it directly before the parameter 'a'.
    // Note: Decorators on parameters run when the class is DEFINED, not when called.
    add(@logParameter a: number, b: number): number {
        return a + b;
    }
}

// 3. EXECUTION
const calculator = new Calculator();

// When we call the method, the logic inside the method runs normally.
// The "decorated" console log actually happened during the script's initialization.
console.log(calculator.add(5, 10));


class Modulo{
    mod(@logParameter a: number, b: number): number {
        return a % b;
    }
}

const modulo = new Modulo();
console.log(modulo.mod(10, 3));