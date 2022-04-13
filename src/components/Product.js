import React, { useContext } from 'react'
import { stockContext } from '../App'

export default function Product(props){
  let stock = useContext(stockContext)
  return(
    <>
      <div className='col-md-4'>
              <img src={'http://codingapple1.github.io/shop/shoes' + (props.idx+1) + '.jpg'} width="100%" alt="상품이미지" />
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.content}</p>
              <p>₩ {props.shoes.price}</p>
              <p>재고 : {stock[props.idx]}</p>
      </div>

      
    </>
  )
  
  }
