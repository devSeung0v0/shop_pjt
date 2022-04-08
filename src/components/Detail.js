import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './detail.scss'
import StockInfo from './StockInfo'

let Box = styled.div`
  padding :20px;
`
let Title = styled.h4`
  font-size: 25px;
  color : ${ [props => props.color]};//색상을 props로 내려주기
`

export default function Detail(props){
  
  let { id } = useParams();//파라미터 값을 저장해서 변수로 만들어서 쓸 수 있다.
  let history = useHistory();

  let findId = props.shoes.find((shoe)=>{
    return shoe.id == id
  })
  let [alert,alertCng] = useState(true)
  
  useEffect(()=>{
    //Detail 페이지 방문 후 alert 창이 2초 후에 사라지게 하기
    let alertTimer = setTimeout(() => {
      alertCng(false)
    }, 2000);
    return ()=>{ clearTimeout(alertTimer)}
  },[])

  const orderClick = ()=>{
    let newStock = [...props.stock]
    newStock[0] = 9
    props.stockCng(newStock)
  }

  return(
    <>
      <div className="container">
        <Box>
        <Title className='title'>PRODUCT DETAIL</Title>
        </Box>
        { alert===true
          ?<div className='my-alert-yellow'>
            <p>품절 임박! 구매를 서두르세요.</p>
          </div>
          : null
        }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ (Number(findId.id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>₩{findId.price}</p>
          <StockInfo stock={props.stock}/>
          <button className="btn btn-danger" onClick={()=>{orderClick()}}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
        </div>
      </div>
</div>
    </>
  )

}