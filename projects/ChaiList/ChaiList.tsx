import React from 'react'
import type { Chai } from '../types'
import { ChaiCard } from './ChaiCard'

interface ChaiListProps{
  items:Chai[]
}

function ChaiList({items}:ChaiListProps) {
  return (
    <div>
      {items.map((chai)=>(
        <ChaiCard
        key={chai.id}
        name={chai.name}
        price={chai.price}
          />
      ))}
    </div>
  )
}

export default ChaiList
