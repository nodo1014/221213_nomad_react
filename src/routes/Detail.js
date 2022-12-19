import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import {addItem} from "./../store.js";
import {useDispatch} from 'react-redux'

let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`
let Box = styled.div`
background : cadetblue;
padding : 20px
`
function Detail(props) {
  let {id} = useParams(); // {id: '1'} --> id = '1';
  let idx = props.shoes.find(x=> x.id == id);
  // 렌더링 일으키기
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(1);
  let dispatch = useDispatch()
  
  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)}, 3000)
    console.log('2. useEffect 렌더링 발생하면, 실행');
    return ()=>{
      console.log('1. cleanupFunc:기존 요청 제거. userEffect보다 먼저 실행.+unMount시 1회 실행');
      clearTimeout(a)
    }
  },[]) // ,[count]하면, count 변할 때만, 실행
    return (
      <div className="container">
        {count}
        <button onClick={()=>setCount(count+1)}>렌더링 발생!</button>
        {
          alert == true
          ?
         <div className="alert alert-warning">2초 후에 뿅</div>
         : null
}
        <Box>
        <YellowBtn>버튼</YellowBtn>
        </Box>
        
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}원</p>
        <button className="btn btn-danger" onClick={()=>{
          dispatch(addItem({id:1, name: 'Red Knit', count :1}))
        }}>주문하기</button> 
      </div>
    </div>


    <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent 탭={탭}/>
{
  // 탭 == 0 ? <div>내용0</div> : null
}
  </div> 
    )
  }

  function TabContent({탭}) {
// {탭}스테이트 변경시(=버튼클릭할 때마다)->특정 코드 변경: useEffect(()=>{},[탭])
let [fade, setFade] = useState('');
useEffect(()=>{
  setTimeout(()=>{setFade('end')},500);
  return ()=>{
    setFade('')
  }
}, [탭])
    return (<div className={'start '+fade}>{
      [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭]
      }</div>)
  }

  export default Detail;
