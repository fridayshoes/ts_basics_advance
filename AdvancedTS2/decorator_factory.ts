// Standard Decorator Factory (ES2023 / TS 5.0+)
function enumerable(value: boolean) {
  // In the new standard, 'context' gives us the metadata
  return function (originalMethod: any, context: ClassMethodDecoratorContext) {
    // We can't directly edit 'enumerable' here because it's handled differently,
    // but this is the structure of modern decorators.
    console.log(`Decorating: ${String(context.name)}`);
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter("world");
console.log(greeter.greet()); // Output: Hello, world