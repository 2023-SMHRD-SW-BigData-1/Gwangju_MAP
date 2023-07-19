// import React, { useState } from "react";
// import { useLocation, useParams, useSearchParams } from "react-router-dom";
// import Axios from "axios";

// const Detail = () => {
//   const location = useLocation();
//   // 사용자가 클릭한 게시물의 id 
//   const { getId } = useParams();


//   const [id, setId ] = useState('')
//   const [region, setRegion ] = useState('')
//   const [title, setTitle ] = useState('')
//   const [view, setView ] = useState('')
//   const [registerId, setRegisterId ] = useState('')
//   const [registerDate, setRegisterDate ] = useState('')
//   const [content, setContent ] = useState('')

//   Axios.get("http://localhost:8888/list", {})
//   .then(res =>{

//     // 
//   //   res.data.MB_ID == getId && 



//   })

//   console.log('location', location)

//   if (!location.state) {
//     return <div>No data available</div>;
//   }



//   return (
//     <div>
//       <p>아이디: {id}</p>
//       <p>지역: {region}</p>
//       <p>제목: {title}</p>
//       <p>조회수: {view}</p>
//       <p>작성자: {registerId}</p>
//       <p>작성일: {registerDate}</p>
//       <p>내용: {content}</p>
//     </div>
//   );
// };

// export default Detail;
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [boardList, setBoardList] = useState(null);

  const getList = () => {
    Axios.post("http://localhost:8888/b_detail", {
      title: id
    })
      .then((res) => {
        const { data } = res;
        console.log(data);
        setBoardList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  if (!boardList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>게시물 상세 정보</h1>
      <p>번호: {id}</p>
      <p>지역: {boardList.rows[0].B_REGION}</p>
      <p>제목: {boardList.rows[0].B_TITLE}</p>
      <p>작성자: {boardList.rows[0].MB_ID}</p>
      <p>작성일: {boardList.rows[0].B_AT}</p>
      <p>내용: {boardList.rows[0].B_CONTENT}</p>
    </div>
  );
};

export default Detail;