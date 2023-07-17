import React, { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";

const Detail = () => {
  const location = useLocation();

  // 사용자가 클릭한 게시물의 id 
  const { getId } = useParams();


  const [id, setId ] = useState('')
  const [region, setRegion ] = useState('')
  const [title, setTitle ] = useState('')
  const [view, setView ] = useState('')
  const [registerId, setRegisterId ] = useState('')
  const [registerDate, setRegisterDate ] = useState('')
  const [content, setContent ] = useState('')

  Axios.get("http://localhost:8888/list", {})
  .then(res =>{

    // 
  //   res.data.MB_ID == getId && 



  })

  console.log('location', location)

  if (!location.state) {
    return <div>No data available</div>;
  }



  return (
    <div>
      <p>아이디: {id}</p>
      <p>지역: {region}</p>
      <p>제목: {title}</p>
      <p>조회수: {view}</p>
      <p>작성자: {registerId}</p>
      <p>작성일: {registerDate}</p>
      <p>내용: {content}</p>
    </div>
  );
};

export default Detail;
