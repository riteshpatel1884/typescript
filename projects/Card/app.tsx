import { Card } from './Component/Card'
import './App.css'

function App() {
  return (
    <>
      <Card
      name="Headphone"
      price={4000}
      />
      <Card
      name="IPhone"
      price={80000}
      />
    </>
  )
}

export default App
