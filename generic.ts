A generic lets you write reusable, type-safe code where the exact type is decided later (when the function/class is used).
Generics and interaface both are templets but generic make the code reusable


//1️⃣ Without Generics (problem)
function identity(value: any) {
  return value;
}

const result = identity("chai");
result.toUpperCase(); // no type safety

// any removes all safety.


// With Generics (solution)
function identity<T>(value: T): T {
  return value;
}

// Now TypeScript knows:

const a = identity("chai"); // T = string
a.toUpperCase(); // ✅

const b = identity(42); // T = number
// b.toUpperCase(); ❌ error





// 2️⃣ 

function wrapInArray<T>(Item:T):T[]{
  return [Item]   // return array of item
}

// <T> ti is a datatype. it can by integer, string or any type and jo return me milega(:T[]) wo bhi same datatyp ka hi hoga

wrapInArray("Masala")  //string
wrapInArray(43)   //number
wrapInArray({flavour: "ginger"})   // objects






// 3️⃣

function pair<A,B>(a:A, b:B):[A,B]{
  return [a,b]
}
// a ka datrype A hai and b ka B hai
// return [a,b] hi karega not [b,a] sicne we have done like this in the return type (:[A,B])

pair("masala", "test")
pair(42, "masala")
pair("masala", {flavour:"ginger"})





// 4️⃣ Generics interface

interface Box<T>{
  content: T
}

const numberBox: Box<number> = {content:10}
const numbercup: Box<string> = {content:"10"}






// 5️⃣Generics are mostly use in API response and form state

interface ApiPromise<T>{
  status: number,
  data:T  // jo data aayega api se uska type T hoga
}

const res:ApiPromise<{flavour:string}>={
  status:200,
  data: {flavour:"masala"}
}
