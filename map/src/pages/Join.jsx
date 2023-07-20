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

    <React.Fragment>
       
   <center>
       <br></br>
       <div className="inputTitle1">회원가입</div>
    
       <br></br>
      
       <div className="inputTitle">닉네임</div>
     <div className="inputWrap">
     <input className="input" value={mb_nick} onChange ={handleinputnick} />
      </div>

   <br></br>

       <div className="inputTitle">아이디</div>
     <div className="inputWrap">
      <input className="input" value={mb_id} onChange ={handleinputid} />
      </div>
    
      <br></br>
    
     <div className="inputTitle">비밀번호</div>
     <div className="inputWrap">
     <input className="input" type='password' value={mb_pw} onChange ={handleinputpw} />
      </div>

   <br></br>

   <button className="w-btn w-btn-indigo" type="button" onClick={onClickJogin}>
   가입하기
</button>

<br></br>
<br></br>

<div>
{/* <a id="acount" href="" target="_self">로그인</a> */}
</div> 
</center>
    </React.Fragment>

  )

}


export default Join;