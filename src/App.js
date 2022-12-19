import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
//https://api.coinpaprika.com/v1/tickers
// 1. api 사용시, 처음 한번만 불러와야한다. 
// `useEffect(()=>{fetch()
// .then()
// .then((json)=>{}) , [])};`
// 2. api 데이터 받기.( json 형식, 배열로 )
//     1. api 데이터 담을 state 를 빈 배열로 생성 : `const [coins, setCoins] = useState([]);`
//     2. fetch 로 데이터를 받는다→response를 .json() 으로. —> setCoins(json). setPost(json)
// 3. api 가져오는 동안, loading… 메세지 보이기(끝나면 없앤다.) : `const [loading, setLoading] = useState(true)`

function App() {
  const [loading, setLoading] = useState(true); // loading은 data
  const [coins, setCoins] = useState([]);
  const [apples, setApples] = useState([]);

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response)=>{
      console.log("response : ", response);
      //Response {type: 'cors', url: 'https://api.coinpaprika.com/v1/tickers', status: 200,
      return response.json(); // 객체를 json으로. (return 문 빼먹어서 ㅠㅠ)
    })
    .then((json)=>{
      console.log(json);
      setCoins(json);
      setLoading(false); //로딩이 끝나면, false -> null\\ 
      // 리턴문이 없네??
    });
  },[]); // []: 아무것도 감시하지 마.

  return (
    <div>
      <Blog />
      {/* <Shop /> */}
      <h1>API loading? : {coins.length}</h1>

      {loading ? <strong>Loading......</strong> : null}
      <ol>
        {coins.map((item, index) => (
          <li key={index}>
            {item.symbol}:{item.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
