import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  // const result = axios.post('http://localhost:8888/user/login',{mb_id: 'mb_id',mb_pw: 'mb_pw'})/
 

  const [mb_id, setMb_Id] = useState("");
  const [mb_pw, setMb_Pw] = useState("");

const handleinputid = (e) =>{
  setMb_Id(e.target.value)
}
  
const handleinputpw = (e) =>{
  setMb_Pw(e.target.value)
}
const onClickLogin = async () => {
  try {
    const result = await axios.post('http://localhost:8888/user/Login', { mb_id, mb_pw });

  console.log(result.data);
  // 로그인 성공 시 처리
} catch (error) {
  console.error(error);
  // 로그인 실패 시 처리
}
}
  
  
  return (
    <div>
      <h1>안전지도 회원가입</h1>
      <label>아이디 입력</label>
        <input type="text" name='id' value={mb_id} onChange ={handleinputid}/><br/>
      <label>비밀번호 입력</label>
        <input type="password" name='pw' value={mb_pw} onChange ={handleinputpw} />
        <button type="submit" onClick={onClickLogin}>로그인</button>
        <Link to='pages/Join'><h3>회원가입</h3></Link>


    </div>
  )
}

export default Login