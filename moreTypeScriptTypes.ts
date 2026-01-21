// =======================
// FORCEFUL TYPE ASSERTION
// =======================

let response: any = "42";

// Since `response` is of type `any`, TypeScript does not know
// what properties or methods exist on it.
// We forcefully tell TypeScript that it is a string using type assertion.

let numericLength: number = (response as string).length;

// Sometimes IntelliSense (dot suggestions) do not appear,
// especially when values come from environment variables,
// APIs, or external sources.
// In such cases, type assertion is commonly used.


// =======================
// TYPE ASSERTION WITH DOM ELEMENTS
// =======================

// getElementById returns `HTMLElement | null`
// TypeScript does not know the exact element type.
// Since we know it is an input element, we assert it.

const inputElement = document.getElementById("username") as HTMLInputElement;

// Now we can safely access input-specific properties like:
// inputElement.value



// =======================
// ANY TYPE
// =======================

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

// No error here.
// `any` disables all type checking.
value.toUpperCase();

// This is dangerous because TypeScript does not protect us
// from runtime errors when using `any`.


// =======================
// UNKNOWN TYPE
// =======================

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

// This will cause an error:
// newValue.toUpperCase()

// Reason:
// `unknown` does NOT allow direct operations.
// TypeScript forces us to check the type first,
// making it much safer than `any`.


// =======================
// TYPE GUARDS WITH UNKNOWN
// =======================

let correctNewValue: unknown;

correctNewValue = "chai";
correctNewValue = [1, 2, 3];
correctNewValue = 2.5;

// We use a type guard to check the type at runtime
if (typeof correctNewValue === "string") {
  correctNewValue.toUpperCase();
}

// Now no error occurs because TypeScript is guaranteed
// that the value is a string inside this block.


// =======================
// TRY-CATCH AND ERROR HANDLING
// =======================

try {
  
} catch (error: any) {
  console.log(error.message);
}

// This works, but it is NOT safe.
// In production, it is NOT guaranteed that `error`
// will always have a `message` property.


// Correct and safe way:

try {
  
} catch (error) {
  // We check if the error is an instance of the Error class
  if (error instanceof Error) {
    console.log(error.message);
  }
  
  // This will log whatever error we received
  console.log(error);
}



// =======================
// UNKNOWN TO STRING CONVERSION
// =======================

// Suppose we received some data,
// but we do not know its type initially.

const data: unknown = "chai aur code";

// This will cause an error:
// const strData: string = data

// Reason:
// TypeScript does not allow assigning `unknown`
// directly to a specific type.


// To fix it, we forcefully assert the type:

const newData: unknown = "chai aur code";
const newStrData: string = newData as string;

// Use type assertion ONLY when you are 100% sure
// about the actual runtime type.


// =======================
// NEVER TYPE (INTERESTING CASE)
// =======================

// type Role = "admin" | "User"
// function redirectBasedOnRole(role: Role): void {
//   if (role === "admin") {
//     console.log("redirecting to admin dashboard");
//     return;
//   }
//   if (role === "User") {
//     console.log("redirecting to user");
//     return;
//   }
// }

// The function returns void and all cases are handled.
// No issue here.


// But if we access `role` after handling all cases,
// TypeScript assigns it the type `never`,
// meaning this code should NEVER be reachable.

// type Role = "admin" | "User"
// function redirectBasedOnRole(role: Role): void {
//   if (role === "admin") {
//     console.log("redirecting to admin dashboard");
//     return;
//   }
//   if (role === "User") {
//     console.log("redirecting to user");
//     return;
//   }
//   role; // role becomes `never`
// }


// =======================
// ADDING A NEW UNION CASE
// =======================

// Now we add a new role
type Role = "admin" | "User" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashboard");
    return;
  }

  if (role === "User") {
    console.log("redirecting to user");
    return;
  }

  // Now this line is reachable
  // because "superadmin" is not handled above
  role;
}

// This is how TypeScript helps in exhaustiveness checking.
// If you forget to handle a new case,
// it will surface via `never` behavior.

