import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { navigator,useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const navigate = useNavigate();

  // const result = axios.post('http://localhost:8888/user/login',{mb_id: 'mb_id',mb_pw: 'mb_pw'})/
 

  const [mb_id, setMb_Id] = useState("");
  const [mb_pw, setMb_Pw] = useState("");

const handleinputid = (e) =>{
  setMb_Id(e.target.value)
}
  
const handleinputpw = (e) =>{
  setMb_Pw(e.target.value)
}

const onClickLogin = () => {
  axios.post('http://localhost:8888/pages/login', { mb_id, mb_pw })
    .then(response => {
      const { result } = response.data;

      if (result === 'success') {
        console.log('Login success!');
        navigate('/'); // 리디렉션 수행
      } else if (result === 'failed') {
        console.log('Login failed');
      }
    })
    .catch(error => {
      console.error(error);
    });
}


   
return (
    <div style={{ textAlign: 'center' }}>
      <br />
      <div className="inputTitle1">회원가입</div>
      <br />
      <div className="inputTitle">닉네임</div>
      <div className="inputWrap">
        <input className="input" />
      </div>
      <br />
      <div className="inputTitle">아이디</div>
      <div className="inputWrap">
        <input className="input" />
      </div>
      <br />
      <div className="inputTitle">비밀번호</div>
      <div className="inputWrap">
        <input className="input" />
      </div>
      <br />
      <button className="w-btn w-btn-indigo" type="button">
        가입하기
      </button>
      <br />
      <br />
      <div>
        <a id="acount" href="" target="_self">로그인</a>
      </div>
    </div>
  );
};

export default Login;