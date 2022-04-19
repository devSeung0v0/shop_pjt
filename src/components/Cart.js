import React from 'react';
import { useState } from 'react';
import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

let CngBtn = styled.button`
  padding: 2px;
  margin: 3px;
  width: 30px
`

let CloseBtn = styled.button`
  border-radius:5px;
  margin-top: 10px;
`

export function Cart(props){

  let state = useSelector((state)=> state.reducer)
  let [alert,alertCng] = useState(true)
  
  let dispatch = useDispatch()

  const alertClose = ()=>{
    alertCng(false)
  }
  return(
    <>
    <Table responsive>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {
          state.map((item,idx)=>{
            return(
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quan}</td>
                <td><CngBtn className="btn btn-danger" onClick={()=>{ dispatch({ type : 'quanPlus', data: item.id}) }}>+</CngBtn></td>
                <td><CngBtn className="btn btn-danger" onClick={()=>{ dispatch({ type : 'quanMinus', data: item.id}) }}>-</CngBtn></td>
              </tr>
            )
          })
        }
      </tbody>
  </Table>
  { alert === true  
    &&  <div className='my-alert-yellow'>
          <p>🎉 지금 구매하시면 타임 세일 20%</p>
          <CloseBtn className="btn btn-danger" onClick={()=>{alertClose()}}>닫기</CloseBtn>
        </div>
  }
    </>
  )
}

/* /* function getStore(state){
  return{
    state : state.reducer
  }
}//redux store 데이터 가져와서 props로 변환해주는 함수(state를 props화) -> useSelecotor로 대체*/

export default Cart
