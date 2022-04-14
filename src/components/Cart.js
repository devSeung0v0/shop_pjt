import React from 'react';
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux';



export function Cart(props){
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
    <tr>
      <td>{props.state[0].name}</td>
      <td>{props.state[0].price}</td>
      <td>{props.state[0].quan}</td>
      <td></td>
    </tr>
  </tbody>
</Table>
    </>
  )
}

function getStore(state){
  return{
    state : state
  }
}//redux store 데이터 가져와서 props로 변환해주는 함수(state를 props화)

export default connect(getStore)(Cart)
