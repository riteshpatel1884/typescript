//  1️⃣
An enum is a way to define a set of named constant values. Use enums when you have fixed options. used to restrict the choices


// 2️⃣
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE
}

const size = CupSize.LARGE 
// or
const size = CupSize.MEDIUM
// or
const size = CupSize.SMALL



// 3️⃣ autoincremented values in enum
enum Status {
  PENDING = 100,
  SERVED,
  CANCELLED
}
// Since pending ko 100 mil gya hai so SERVED ko automatically 101 mil jayega and CANCELLED ko 102 mil jayega




// 4️⃣
enum chaitypes{
  MASALA = "masala",
  GINGER = "ginger"
}

function makechai(type:chaitypes){
  console.log(`Making ${type}`)
}

makechai("masala")   // It will show error
makechai(chaitypes.MASALA)   // correct way to use it




// 5️⃣ hetrogenous values
enum RandomEnum{
  ID = 1,
  NAME = "chai"
}
// It is used but is not a good code practice since ham enum ke case me datatyeps ek hi rakhte hai like upar ke example me sare string the but 
// isme string and number hai(ID =1,)




// 6️⃣ To make enum constant
const enum Sugar{
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

const s = Sugar.HIGH




// 7️⃣ tuple array hai so we can push element.
let t:[string, number] = ["chai", 10]
t.push("extra")
