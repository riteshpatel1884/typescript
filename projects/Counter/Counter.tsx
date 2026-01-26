import { useState } from "react"

export function Counter(){
 const [count, setCount] = useState<number>(0);  //<number>: It means counter me jo data aayega wo always number hoga
  return(
    <div>
      <p>Cups Ordered: {count}</p>
      <button onClick={()=>setCount((c)=>c+1)}>
        Order more chai
      </button>
    </div>
  )
}

// so agar ham c+1 ki jagah c+"1" kar dete hai then error aeyaga so ab isme number value ko hi +1 kr shakte hai
