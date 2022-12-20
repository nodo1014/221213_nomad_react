import React from 'react';
import { useState } from 'react';

function ToDo () {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((toDos) => [toDo,...toDos]);
    setToDo(""); // *** input>value={toDo} 초기화
  }
  const onChange = (e) => setToDo(e.target.value);
  // 부모요소를 삭제하는게 아닌 배열에 들어가있는 index와 삭제할(버튼의 li) index를 찾아서 삭제할 경우 (filter함수 사용)
  // const li = event.target.parentElement;
  // li.remove();
  const deleteToDo = index => {
    setToDos(toDos.filter((item, toDoIndex)=>index !== toDoIndex))
  };
  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange}
          value={toDo}
          type="text"
        />
        <button>입력</button>
        <ol>
          {toDos.map((item, index) =>  <li key={index}>{item}<button onClick={()=>deleteToDo(index)}>⛔</button></li>)}

        </ol>
      </form>
    </div>
  );
};

export default ToDo;