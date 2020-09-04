import React from 'react'
import Products from './Products'
import vschoolProducts from './vschoolProducts'

export default function MainContent() {
  return (
    <div>
      {vschoolProducts.map((item) => <Products key={item.id}product={item}/>)}
    </div>
  )
}