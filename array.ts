// 1️⃣ 
An array is a collection of values of the same type.

const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice:number[] = [10,20]
const rating: Array<number> = [4.5,3.4]

bboi

// 2️⃣
type Chai = {
  name:string
  price:number
}

const menu:Chai[]=[
  {name:"Masala", price:15},
  {name:"Adrak", price:20}
]



// 3️⃣
const cities:readonly string[] = ["Delhi","Ghaziabad"]
cities.push("Pune")
// readonly me push nhi kr shakte hai so it will show an error




// 4️⃣ Multidimensional array
const table: number[][] = [
  [1,2,3],
  [4,5,6]
]



// 5️⃣
let chaiTuple:[string, number];
chaiTuple = ["Masala", 20]   // Format of parameter should be same, masala ko 20 ke baad nhi likh shakte hai.
chaiTuple = [20,"Masala"]   // Error will be shown





// 6️⃣
let userInfo:[string, number, boolean?]
userInfo = ["Ritesh", 100]   // Boolean is optional



//  7️⃣
const location: readonly [number, number] = [24.5,24.5]
// these are readonly so their value can't be changed.



// 8️⃣ named tuple
// A tuple is an array with fixed length, fixed order and fixed types.
let user: [number, string] = [1, "Ritesh"];

// A named tuple gives names to tuple elements, so the code becomes readable.
let user: [id: number, name: string] = [1, "Ritesh"];
const chaiItems: [name:string, price:number] = ["Masala", 20]




