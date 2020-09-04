import React from 'react'

export default function Product(props){
  return(
    <div>      
      <h1>Name: {props.product.name} </h1>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <br/>
      <hr/>      
    </div>
  ); 
}

