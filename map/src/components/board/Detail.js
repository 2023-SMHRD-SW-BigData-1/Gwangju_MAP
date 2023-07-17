import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { id } = useParams();
  

  
  if (!location.state) {
    return <div>No data available</div>;
  }

  const { region, title, registerId, registerDate, view, content } = location.state;

  return (
    <div>
        <p>아이디: {id}</p>
        <p>지역: {region}</p>
        <p>제목: {title}</p>
        <p>조회수: {view}</p>
        <p>작성자: {registerId}</p>
        <p>작성일: {registerDate}</p>
        <p>내용: {content}</p>
        btn
    </div>
  );
};

export default Detail;
