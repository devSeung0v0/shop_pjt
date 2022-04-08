import React from 'react'

export default function StockInfo(props){
  return(
    <>
    <p>재고: {props.stock[0]}</p>
    </>
  )
}