import { useState } from 'react'
import React from 'react'

interface OrderFormProps{
  onSubmit(order:{name:string; cups:number}):void  // It is a method that return void
}

function OrderForm({onSubmit}:OrderFormProps) {
  const[name, setName] = useState<string>("Masala")
  const [cups, setCups] = useState<number>(0);

  function handleSubmit (e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    onSubmit({name, cups})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Chai</label>
      <input 
      value={name}
      onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
      }}
       />

       <label> Cups</label>
      <input 
      type="number"
      value={cups}
      onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
        // setCups(e.target.value): It will show error as we have already set that cup number me hi aayega([cup, setCups] = useState<number>(0);) 
        // so typecaste it to number
        setCups(Number(e.target.value))
      }}
       />
     <button type="submit">Place Order</button>
    </form>
  )
}

export default OrderForm
