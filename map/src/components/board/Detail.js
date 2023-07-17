import React from "react";

const Detail = ({id,
    region,
    title,
    registerId,
    registerDate,
    view,
    content}) => {

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