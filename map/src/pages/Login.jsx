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
  <div className="lpage">
    <div className="titleW">
      <div className="ht">한눈에 보이는 안전정보</div>
      <div className="ht">광주 안전지도</div>
    </div>
    <br />
    <div className="contentWrap">
      <div className="inputid">아이디</div>
      <div className="inputW">
        <input className="lo" onChange={handleinputid} />
      </div>
      <br />
      <div className="inputpw">비밀번호</div>
      <div className="inputW">
        <input className="lo" type="password" onChange={handleinputpw} />
      </div>
    </div>
    <br />
    <button className="w-btn" type="button" onClick={onClickLogin}> 로그인 </button>
    <br />
    <div>
      <Link to="pages/Join">회원가입</Link>
    </div>
  </div>
);
};

export default Login;