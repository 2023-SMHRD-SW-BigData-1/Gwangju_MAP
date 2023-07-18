import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { navigator,useNavigate } from 'react-router-dom';
import Header from '../components/Header';
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
      // console.log(response.config.data);
      // localStorage.setItem("user_id",response.config.data.mb_id)
      // const User_id = localStorage.getItem("user_id")
      // response.session.destroy()
      // console.log(response.body);
      const { result, user } = response.data;

    if (result === 'success') {
      console.log('Login success!');
      console.log(response);
      console.log(user);
      alert(
      user.mb_nick + ' 님 반갑습니다.'
      )
     sessionStorage.setItem('nick',user.mb_nick);
     sessionStorage.setItem('id',user.mb_id);
     sessionStorage.getItem('nick')
      navigate('/');
      } else if (result === 'failed') {
        console.log('Login failed');
      }else if (result ==='Incorrect password'){
        alert(
          console.log(' 비밀번호가 틀렸습니다.')
        )
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