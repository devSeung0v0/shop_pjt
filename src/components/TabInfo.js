import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

let TabBox = styled.div`
  padding :30px;
  font-size:20px
`

export default function TabInfo(props){

  useEffect(()=>{
    props.tabSwitchCng(true)
  })

  if(props.tab===0){
    return(
      <TabBox>상품 설명 내용입니다.</TabBox>
    )
  }else if(props.tab===1){
    return(
      <TabBox>상품 정보 내용입니다.</TabBox>
    )
  }else{
    return(
      <TabBox>Q&A 내용입니다.</TabBox>
    )
  }
  
}