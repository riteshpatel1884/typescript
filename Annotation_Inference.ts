// To run a TypeScript file, use:
npx ts-node src/index.ts


// --------------------------------------------------
// 1️⃣ Type Inference: Type inference means TypeScript automatically figures out the type for you based on the value.

let drink = "chai";   // string
drink = 0; //  Error: Type 'number' is not assignable to type 'string'
// TypeScript will NOT allow assigning a number because it infers `drink` as a string based on the initial value.


// --------------------------------------------------
// 2️⃣ Types of Errors in TypeScript
// TypeScript mainly shows two kinds of errors:

// (1) Syntax Error
let let name = "Ritesh"; // Invalid syntax

// (2) Type Error
let channelName = "Ritesh";
channelName = 2; // Type 'number' is not assignable to type 'string'

// This behavior is called type inference.
// TypeScript automatically understands the variable type based on the initial value.
// Since `channelName` was assigned a string first, it will only accept strings afterward.


// --------------------------------------------------
// 3️⃣ Type Annotation: Type annotation means you explicitly tell TypeScript what the type is.
let chaiFlavour: string = "Masala chai";
chaiFlavour = "Ginger";
// `:string` is called a type annotation. 

// Types of Annotations

// 1.  Primitive types
let age: number = 21;
let username: string = "Ritesh";
let isAdmin: boolean = false;

// 2. Arrays
let scores: number[] = [90, 80, 70];
let names: Array<string> = ["A", "B"];

// 3. Tuple (fixed length & fixed order)
let user: [number, string] = [1, "Ritesh"];

// 4. Object Type Annotation
let person: { name: string; age: number } = {
  name: "Ritesh",
  age: 21
};

// 5. Function Annotations
function add(a: number, b: number): number {
  return a + b;
}

// 6. Arrow function with return type
const multiply = (a: number, b: number): number => a * b;

// 7. Union Type Annotation
let id: number | string;
id = 10;
id = "10";
// This means `id` can hold either a number or a string

// 8. Literal Type Annotation
let status: "success" | "error" | "loading";



// 4️⃣ Problem with implicit `any`
const orders = ['12', '28', '20', '42'];
let currentOrder;

// On hover, `currentOrder` becomes `any` because TypeScript cannot determine its type. This is dangerous and defeats TypeScript’s purpose.
// Corrected Version (Type-safe)👇

const orders = ['12', '28', '20', '42'];
let currentOrder: string | undefined;

for (let order of orders) {
  if (order === '20') {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);

// We used `undefined` because the order "20" may or may not exist in the array so typeScript forces us to handle that possibility
