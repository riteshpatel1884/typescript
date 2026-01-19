// 1️⃣ Type narrowing
Type narrowing is a TypeScript feature that lets the compiler figure out a more specific type of a variable at runtime, based on the checks you write in code.
let value: string | number;
// Here, value could be either.
// So TypeScript won’t let you do string-only or number-only operations until you prove what it is.
// That proof is called type narrowing.

function printValue(value: string | number) {
  if (typeof value === "string") {
    // value is now STRING
    console.log(value.toUpperCase());
  } else {
    // value is now NUMBER
    console.log(value.toFixed(2));
  }
}

// What happened?
// typeof value === "string" → narrows to string
// else → automatically narrows to number
// TypeScript understands this without type casting.

// Common ways to do type narrowing
//  A. typeof
if (typeof x === "string") { }
if (typeof x === "number") { }


//  B. Truthy / falsy checks
function greet(msg?: string) {
  if (msg) {
    // msg is string
    return `Hello ${msg}`;   // Be careful: empty strings ("") are falsy.
  }
}


//  C. instanceof (for classes)
if (chai instanceof KhuladChai) {
  chai.serve();
}


// D. in operator (object properties)
type A = { a: number };
type B = { b: string };

function test(x: A | B) {
  if ("a" in x) {
    // x is A
  }
}



// --------------------------------------------------
// --------------------------------------------------
// 2️⃣ Union types + typeof narrowing
function getchai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

// What’s happening
// -> kind can be string OR number.
// -> typeof kind === "string" is a type guard.
// -> Inside that if block, TypeScript guarantees kind is a string.
// -> Outside the block, TS knows it must be a number.

// Why this is best practice
// -> No type casting
// -> No runtime errors
// -> Compiler understands your intent
// -> This is correct usage of type narrowing.



// --------------------------------------------------
// --------------------------------------------------
//  3️⃣ Optional parameters (?) + truthy narrowing
function serverchai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default message`;
}

// msg?: string means string | undefined
// if (msg) narrows the type to string
// Inside the if, TS guarantees msg exists
// Outside, TS guarantees msg is undefined



// --------------------------------------------------
// --------------------------------------------------
// 4️⃣ Literal types + union narrowing
function orderchai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Small cutting chai`;
  }

  if (size === "medium" || size === "large") {
    return `Make extra chai`;
  }

  return `Chai order ${size}`;
}


// "small" | "medium" | "large" are literal types
// Comparing with exact values narrows the type
// Final return handles number



// --------------------------------------------------
// --------------------------------------------------
// 6️⃣ Class-based narrowing with instanceof
class khuladchai {
  server() {
    return `Serving khulad chai`;
  }
}

class cuttingchai {
  server() {
    return `Serving cutting chai`;
  }
}

function server(chai: khuladchai | cuttingchai) {
  if (chai instanceof khuladchai) {
    return chai.server();    // server() method khuladchai se hi aaya hai
  }
}

// instanceof is used for class-based narrowing
// Inside the block, TS knows the exact class
// Since both methods have the same name, we don’t know which one is being called at runtime.
// So we use instanceof to determine which class the object belongs to, and then call the appropriate method.



// --------------------------------------------------
// --------------------------------------------------
// 7️⃣ Custom type guard (obj is Type): typescripts allows to create our own types
type chaiOrder = {
  type: string;
  sugar: number;
};

function ischaiorder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

// The object being returned (:obj) is guaranteed to be of type ChaiOrder.
function serveorder(item: chaiOrder | string) {
  if (ischaiorder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai`;
}

// Inside if, TS knows item is chaiOrder
// Outside, it must be string



// --------------------------------------------------
// --------------------------------------------------
// 8️⃣ An interesting way of declaring types in a production-level codebase.

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};
// type MasalaChai: This type is a keyword and
// type: "masala": this type is a value/property

type chai = MasalaChai | GingerChai | ElaichiChai

function Makechai(order:chai){
  switch(order.type){
    case "masala":
      return `masala chai`
      break;
    
    case "elaichi":
      return 'elaichi chai'
      break;

    case "ginger":
       return "ginger chai"
       break;
  }
}

// This code is considered comparatively better because we’ve strictly and safely defined what data is allowed. Nothing outside these constraints can pass through.



// --------------------------------------------------
// --------------------------------------------------
// 9️⃣ unknown vs any + array type guard
// kayi baar arrays dataype ke case me ham unknown/any ka use krte hai 
function isStringArray(arr:unknown): arr is string[]{
  //code part
}


// When the value enters the function, its type is unknown.
// After validation, TypeScript guarantees it is a string[].
