import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Label } from 'recharts';
import { navigator, useNavigate } from 'react-router-dom';

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
    <div>
      <br />
      <div className="jt">회원가입</div>
      <br />
      <div className="jt">닉네임</div>
      <div className="jw">
        <input className="input" />
      </div>
      <br />
      <div className="jt">아이디</div>
      <div className="jw">
        <input className="js" />
      </div>
      <br />
      <div className="jt">비밀번호</div>
      <div className="jw">
        <input className="js" />
      </div>
      <br />
      <button type="submit" onClick={onClickJogin}>가입하기</button>
      <br />
      <br />
    </div>
  );
};

export default Join;