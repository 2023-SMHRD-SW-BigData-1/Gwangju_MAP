import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

const Write = () => {
  const [isModifyMode, setIsModifyMode] = useState(true);
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    Axios.post("http://localhost:8888/b_update/select", {
      title: title,
      region: region,
      content: content,
      mb_id: sessionStorage.getItem("id")
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const write = () => {
    Axios.post("http://localhost:8888/b_update", {
      title: title,
      region: region,
      content: content,
      mb_id: sessionStorage.getItem("id")
    })
      .then((res) => {
        console.log(res);
        alert("업데이트 되었습니다.");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "region") {
      setRegion(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

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

export default Write;