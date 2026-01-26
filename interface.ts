// 1️⃣
function makeChai(order:{type:string; sugar:number; strong:boolean
}){
  console.log(order);
}

// This function takes an object as a parameter.
// The object has 3 properties:
// - type: string
// - sugar: number
// - strong: boolean
// Here the parameter type is a bit complex because it contains multiple properties with different data types.

function serverChai(order:{type:string; sugar:number; strong:boolean
}){
  console.log(order);
}

// { type: string; sugar: number; strong: boolean }: This structure is called a "type signature" or "data shape".
// Since the same structure is used multiple times, we make it into a reusable custom type to improve readability.

type chaiorder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: chaiorder) {
  console.log(order);
}

function serverChai(order: chaiorder) {
  console.log(order);
}





// =======================
// 2️⃣ IMPLEMENTING TYPES VS INTERFACES
// =======================


type teaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements teaRecipe {
  water = 100;
  milk = 50;
}

// This works because `teaRecipe` is an object type and classes can implement object shapes.


type cupSize = "small" | "large"
class chai implements cupSize{
}
// But this will NOT work:
// Reason: "small | large" is a union of literal values, NOT an object. Classes can ONLY implement object types or interfaces, 
// not primitive unions or custom or literal types.

// To fix this, we wrap the literal union inside an interface.
// Interfaces always describe an object shape, so classes can implement them.

interface cupSize {
  size: "small" | "large";
}

class chai implements cupSize {
  size: "small" | "large" = "large";      // The value must be either "small" or "large"
}




// =======================
// 3️⃣ UNION TYPES AND CLASSES
// =======================

// This is a union type
type Response = { ok: true } | { ok: false };

// Whenever we use a union ( union is represented as | ), it CANNOT be implemented by a class directly.

class Myres implements Response{
  ok:boolean= true    // Error will show like a class can only implemt an object type or an INTERSECTION of object types (&)
}

// A union means "either this OR that", which a class cannot guarantee at compile time.
// to fix it make it a interface

// Example fo union
type TeaType = "masala" | "ginger" | "lemon"   // these are called the literal types because it allow ONLY fixed values not any primitive, string, object 

function orderChai(t:TeaType){
  console.log(t)  // ish t me sirf inhi tino me se koi aa shakta hai
}




// =======================
// 4️⃣ INTERSECTION TYPES
// =======================

// Base object
type BaseChai = {
  tealeaves: number;
};

// Extra properties
type Extra = {
  masala: number;
};

// Intersection type using & this means BOTH properties must exist

type newMasalaChai = BaseChai & Extra;

const cup: newMasalaChai = {
  tealeaves: 2,
  masala: 1,
};




// =======================
//5️⃣ OPTIONAL PROPERTIES
// =======================

// Sometimes a value may or may not exist (optional). We use ? to mark it as optional.

type User = {
  username: string;
  bio?: string; // if bio exists, it must be a string
};

const u1: User = { username: "Ritesh" };
// OR
const u2: User = { username: "Ritesh", bio: "Developer" };


// If bio is missing, TypeScript will NOT throw an error because it is marked as optional.




// 6️⃣

interface Chai{
  flavour: string,
  price:number
  milk?:boolean  // optional property
}
//  We can also make this using type but interface has its own benefits

const masalaChai:Chai={
  flavour:"Masala",
  price: 30
}




// 7️⃣ defining readonly property

interface shop{
  readonly id:number
  name: string
}

const s: shop ={
  id:1,
  name:"Chaicode"
}





// 8️⃣ interface me ham functionality nhi likh shakte, and agar naam bhi nhi likhna hai then
interface Discount{
  (price:number): number
}
// price number hoga and return type bhi number hi hoga

const apply50:Discount = (p) => p*0.5





// 9️⃣
interface TeaMachine{
  start(): void
  stop():void
}

const machine: TeaMachine={
  start(){
    console.log("start")
  },
  stop(){
    console.log("stop")
  }
}






// 1️⃣0️⃣ index signature: It tells TypeScript that this object can have unknown/dynamic property names, but all values will follow a specific type.
interface chaiRating{
  [flavour:string]:number   // multiple ratings can be implemented
}

const ratings:chaiRating={
  masala:4.5,
  ginger:2.3
}






// 1️⃣1️⃣ suppose ye wala interface library se aaya hai
interface User{
  name: string
}

// and ye wala interface hamne create kiya (user defined interface)
interface User{
  age:number
}

const u:User={
  name:"Ritesh"  // It will show error as it is referring to user interface so dono property iske andar hone chaiye
}

// correction
const u:User= {
  name:"Ritesh",
  age:21
}





// 1️⃣2️⃣

interface A {a:string}
interface B {b:string}

interface C extends A,B {}
