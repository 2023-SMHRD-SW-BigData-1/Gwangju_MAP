import React, { useState } from 'react'
import axios from 'axios'
import { Label } from 'recharts'




const Join = () => {

  
  // const result = axios.post('http://localhost:8888/user/Join',{mb_id: 'mb_id',mb_pw: 'mb_pw', mb_nick:'mb_nick'})

  const [mb_id, setMb_Id] = useState("");
  const [mb_pw, setMb_Pw] = useState("");
  const [mb_nick, setMb_Nick] = useState("");

  const handleinputid = (e) =>{
    setMb_Id(e.target.value)
  }
    
  const handleinputpw = (e) =>{
    setMb_Pw(e.target.value)
  }
  const handleinputnick = (e) =>{
    setMb_Nick(e.target.value)
  }



  const onClickJogin = async () => {
    try {
      const result = await axios.post('http://localhost:8888/user/Join', { mb_id, mb_pw, mb_nick });
  
    console.log(result.data);
    // 전송 성공 시 처리
  } catch (error) {
    console.error(error); 
    // 전송 실패 시 처리
  }
  }



  return (
    <div>
        <h1>회원가입</h1>
        <h3>회원정보입력</h3>
        <label>아이디를 입력해 주세요 : </label>
        <input type="text" name='id' value={mb_id} onChange ={handleinputid}/><br/>
        <label>비밀번호를 입력해 주세요 : </label>
        <input type="password" name='pw' value={mb_pw} onChange ={handleinputpw}/><br/>
        <label>닉네임을 입력해 주세요 : </label>
        <input type="text" name='nick'  value={mb_nick} onChange ={handleinputnick}/>
        <button type="submit" onClick={onClickJogin}>가입하기</button>

    </div>
  )
}

export default Join