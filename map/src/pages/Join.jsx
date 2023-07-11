import React from 'react'
import axios from 'axios'
import { Label } from 'recharts'

const Join = () => {

  const result = axios.post('http://localhost:8888/user/Join',{mb_id: 'mb_id',mb_pw: 'mb_pw', mb_nick:'mb_nick'})


  return (
    <div>
        <h1>회원가입</h1>
        <h3>회원정보입력</h3>
        <label>아이디를 입력해 주세요 : </label>
        <input type="text" name='id'/><br/>
        <label>비밀번호를 입력해 주세요 : </label>
        <input type="password" name='pw'/><br/>
        <label>닉네임을 입력해 주세요 : </label>
        <input type="text" name='nick' />
        <input type="submit" value="회원가입 하기"/>

    </div>
  )
}

export default Join