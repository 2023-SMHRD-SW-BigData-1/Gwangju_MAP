import React,{} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const result = axios.post('http://localhost:8888/user/login',{mb_id: 'mb_id',mb_pw: 'mb_pw'})

  
  
  
  return (
    <div>
        <input type="text" name='id'/>
        <input type="password" name='pw'/>
        <input type="submit" value="제출"/>

        <Link to='pages/Join'><h3>회원가입</h3></Link>
    </div>
  )
}

export default Login