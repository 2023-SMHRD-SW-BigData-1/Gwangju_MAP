import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { navigator,useNavigate } from 'react-router-dom';
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
        // alert(response.data.id)
        // console.log(result);
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
     
  <div className="page">
     
     <div className="titleWrap" >
       <center>


       <div className="title">한눈에 보이는 안전정보</div>
       <div className="title">
      광주 안전지도</div>
       </center>
    
     </div>
     <br></br>
     <div className="contentWrap">

       <div className="inputTitle">아이디</div>
       <div className="inputWrap">
        <input type='text' className="input" name='id' value={mb_id} onChange ={handleinputid} />
        </div>
      
        <br></br>
      
       <div className="inputTitle">비밀번호</div>
       <div className="inputWrap">
       <input type='password' className="input" value={mb_pw} onChange ={handleinputpw}/>
        </div>

       <div className="errorMessageWrap">
          </div>
       </div>

     <br></br>

     <button type="submit" onClick={onClickLogin}>로그인</button>

<br></br>

<div>
<center>

<Link to='pages/Join'><h3>회원가입</h3></Link>
</center>
</div> 

       </div>
 );
}

export default Login