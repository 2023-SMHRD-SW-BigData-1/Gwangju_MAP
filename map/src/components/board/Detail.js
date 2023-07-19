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
      <h1 className="b_title">[{boardList.rows[0].B_REGION}]{boardList.rows[0].B_TITLE}</h1>
      <hr></hr>
      <p>작성자 | {boardList.rows[0].MB_ID}</p><p>등록일 | {boardList.rows[0].B_AT.match(/^\d{4}-\d{2}-\d{2}/)[0]}</p>
      <hr></hr>
      <p className="b_content">{boardList.rows[0].B_CONTENT}</p>
      
    </div>
  );
};

export default Detail;