import ChaiList from './Component/ChaiList'
import type { Chai } from './types'

const menu:Chai[] = [
  {id:1, name:"MASALA", price: 20},
  {id:2, name:"GINGER", price: 25},
  {id:3, name:"CARDAMON", price: 50},
]

function App() {
  return (
    <>
      <ChaiList 
      items={menu}
      />

    </>
  )
}

export default App
