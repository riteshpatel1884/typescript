// =======================
// Basic object example
// =======================

const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true
};

// Declaring object type explicitly
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger tea",
  price: 25,
  isHot: true
};

// recommended way

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak chai",
  price: 25,
  ingredients: ["ginger", "tea"]
};




// =======================
Extra properties are allowed (Type Compatibility)
// =======================

type Cup = {
  size: string;
};

let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

// The size should be string and if there is anything else extra (material: "steel") then there will be no problem

// Another example of extra properties 
type Brew = {brewTime: number}
const coffee = {brewTime:5, beans: "Arabica"}
const chaibrew:Brew = coffee

// ts me extra values(beans: "Arabica") aane se koi issue nhi hota.



// =======================
Missing required property causes error
// =======================

type User = {
  username: string;
  password: string;
};

const user: User = {
  username: "Ritesh",
  password: "123"
};

// If you miss password, TypeScript will throw an error.
// 👉 Extra properties are okay, missing ones are not.




// =======================
Splitting types (Good Practice)
// =======================

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];   // Array of items
  address: Address;
};

// Splitting types makes code cleaner and easy to manage.
// There are many items in the items which have the power of coins and they have damaged items already so this type of separation is considered 
// a good practice in this.


