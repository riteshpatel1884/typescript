// 1️⃣
function makeChai(type: string, cups:number){
  console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala", 2)


pnopopo


//2️⃣
function getChaiPrice():number{
  return 2
}
// It means return type number hi hoga



// 4️3️⃣
function makeOrder(order:string){
  if(!order)
     return null;
  return order;
}
// Ish case me data kisi bhi type ka ho shakta hai, suppose hamne string type me return kri then there is a null so it will show an error
function makeOrder(order:string): string{
  if(!order)
     return null
  return order
}

// To fix it
// Method 1
function makeOrder(order: string): string {
  if (!order) {
    return " ";
  }
  return order;
}

// OR 2. Admit that null is possible
function makeOrder(order: string): string | null {
  if (!order) {
    return null;
  }
  return order;
}

// OR 3. Fail fast (best for serious code)
function makeOrder(order: string): string {
  if (!order) {
    throw new Error("Order is required");
  }
  return order;
}




// 4️⃣
function logChai():void{
  console.log("No value")
}
// Ish functionn se koi bhi datatype return bahar nhi jayega




// 5️⃣ optional vs default parameter
 function overChai(type?:string){
   
 }

//  types optional ho shakta hai and agar wo aaya to string hoga
// OR
function overChai(type:string = "Masala"){

 }




// 6️⃣
 function createChai(order:{
  type:string;
  sugar:number;
  size:"small" | "large"
 }):number{
  return 4
 }





