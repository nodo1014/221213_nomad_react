import "./Blog.css";
import React, { useState } from "react";

function Blog() {
  let [post, postSet] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "useState() 독학",
  ]);
  let [like, likeSet] = useState([0, 0, 0]);
  let [modal, modalSet] = useState(0);
  let [postNo, postSetNo] = useState(2); // 클릭한 포스트 i 저장->props로 전달
  // let [sort, setSort] =useState(0);
  let [input, inputSet] = useState("");
  // 깊은 복사
  // const origin = {a:1, b:2};
  // const deepCopy = {...origin};
  // origin.a = 100;
  //deepCopy 는 (값 변경전에 원본 백업->오히려 오리지널a:1, b:2)
// deepCopy.a = 200;

  return (
    <div className="Blog">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button
      // sort 구현 : 배열 복사 후 정렬
        onClick={() => {
          let copy = [...post];
          console.log('...post : ', copy);
          postSet(copy.sort());
          console.log(copy);
        }}
      >
        정렬
      </button>
      {post.map((a, i) => {
        return (
          <div key={i} className="list">
            <h4
              onClick={() => {
                postSetNo(i);
                modalSet(!modal);
              }}
            >
              {a}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeSet(copy); // ** array 자체를 교체!!!!
                }}
              >
                👍
              </span>{" "}
              {like[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...post];
                  copy.splice(i, 1); // shift(=move제거)
                  console.log("copy.slice(i,1)");
                  postSet(copy);
                }}
              >
                {" "}
                삭제
              </span>
            </h4>
            <p>3월 17일</p>
          </div>
        );
      })}
      <hr />
      <span className="inputbox">
        <input
          onChange={(e) => {
            inputSet(e.target.value);
            console.log(e.target.value);
          }}
        />
      </span>
      <button
        onClick={() => {
          let copy = [...post];
          copy.unshift(input);
          postSet(copy);
        }}
      >
        글발행
      </button>

      {modal === true ? (
        <Modal
          postNo={postNo}
          postSetNo={postSetNo}
          post={post}
          postSet={postSet}
          color={"yellow"}
        ></Modal>
      ) : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.post[props.postNo]}</h4>
      <p>
        <input type="checkbox" />
        글발행: input onChange e.target.value
      </p>
      <p>
        <input type="checkbox" />
        e.stopPropagation()
      </p>
      <p>
        <input type="checkbox" />
        상세 내용: props.post[props.postNo]
      </p>
      <p>
        <input type="checkbox" />
        부모->props.color
      </p>
      <p>
        <input type="checkbox" />글 삭제 기능
      </p>
      <p>
        <input type="checkbox" />
        버튼으로 글 정렬
      </p>
    </div>
  );
}
export default Blog;
