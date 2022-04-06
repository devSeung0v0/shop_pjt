import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './detail.scss'

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
  return(
    <>
      <div className="container">
        <Box>
        <Title className='title'>PRODUCT DETAIL</Title>
        </Box>
       <div className='my-alert-yellow'>
         <p>품절 임박! 구매를 서두르세요.</p>
       </div>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ (Number(findId.id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>₩{findId.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
        </div>
      </div>
</div>
    </>
  )

}