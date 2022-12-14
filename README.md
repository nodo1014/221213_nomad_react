# 221213_nomad_react

# Super Converter
1. 버튼 이름 바꾸기.
 js : getElementById 선택->생성
 re : {}안에 state변수를 바로 사용!
<button onClick={onClick}>{!state?버튼1:버튼2}****</button> 
1. input의 value 바꾸기
 setAmount(e.target.value);

1. useState(false) : 반전. toggle
```javascript
const [flipped, setFlipped] = React.useState(false);
      const flipped_f = () => {****
        setFlipped((current) => !current);
      };
```

# 컴포넌트 return ();