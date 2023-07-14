import React, { useState } from 'react';
import axios from 'axios';
import './Join.css';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  const [mb_id, setMb_Id] = useState("");
  const [mb_pw, setMb_Pw] = useState("");
  const [mb_nick, setMb_Nick] = useState("");

  const handleinputid = (e) => {
    setMb_Id(e.target.value);
  };

  const handleinputpw = (e) => {
    setMb_Pw(e.target.value);
  };

  const handleinputnick = (e) => {
    setMb_Nick(e.target.value);
  };

  const onClickJogin = () => {
    axios.post('http://localhost:8888/pages/Login/pages/Join', { mb_id, mb_pw, mb_nick })
      .then(response => {
        const { result } = response.data;

        if (result === 'success') {
          console.log('Join success!');
          navigate('/pages/Login'); // 리디렉션 수행
        } else if (result === 'failed') {
          console.log('Join failed');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="jt">회원가입</div>
        <div className="jtm">닉네임</div>
        <div className="inputWrap">
          <input className="jput" />
        </div>
        <div className="jtm">아이디</div>
        <div className="inputWrap">
          <input className="jput" />
        </div>
        <div className="jtm">비밀번호</div>
        <div className="inputWrap">
          <input className="jput" />
        </div>
        <button className="btn" type="button">
          가입하기
        </button>
        <br />
        <br />
        <div>
          <a id="acount" href="" target="_self">
            로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;