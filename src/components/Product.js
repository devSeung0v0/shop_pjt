import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { stockContext } from '../App'

export default function Product(props){
  let stock = useContext(stockContext)
  let history = useHistory()
  return(
    <>
      <div className='col-md-4' onClick={()=>{history.push('/detail/' + props.shoes.id)}}>
              <img src={'http://codingapple1.github.io/shop/shoes' + (props.idx+1) + '.jpg'} width="100%" alt="상품이미지" />
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.content}</p>
              <p>₩ {props.shoes.price}</p>
      </div>

      
    </>
  )
  
  }
