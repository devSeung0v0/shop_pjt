import React from 'react'
import Data from '../data'

export default function Product(props){

  return(
    <>
      <div className='col-md-4'>
              <img src={'http://codingapple1.github.io/shop/shoes' + (props.idx+1) + '.jpg'} width="100%" alt="상품이미지" />
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.content}</p>
              <p>₩ {props.shoes.price}</p>
      </div>

      
    </>
  )
  
  }
