import { Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from "./../store/userSlice.js"
import { addCount } from "./../store"

function Cart() {

let state = useSelector((state)=>state) //store의 state 전체
let dispatch = useDispatch()

// console.log(state.cart[0].name);

  return (
    <div>
       <h6>user.age: {state.user.age} user.name: { state.user.name }의 장바구니 </h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
{
    state.cart.map((a, i)=>
    <tr key={i}>
    <td>{state.cart[i].id}</td>
    <td>{state.cart[i].name}</td>
    <td>{state.cart[i].count}</td>
    <td><button onClick={(state)=>{
        dispatch(changeName())
    }}>Name</button>
    <button onClick={(state)=>{
        dispatch(increase(1))
    }}>age+</button>
        <button onClick={()=>{
        dispatch(addCount(state.cart[i].id))
    }}>수량+</button>
    </td>
  </tr>
    )
}


        </tbody>
      </Table>
    </div>
  );
}

export default Cart
