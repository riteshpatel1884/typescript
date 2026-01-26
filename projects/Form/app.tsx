import OrderForm from './Component/OrderForm'

function App() {
  return (
    <>
      <div>
        <OrderForm
        onSubmit={(order)=>{
          console.log("Placed", order.name, order.cups)
        }}
        />
      </div>
    </>
  )
}

export default App
