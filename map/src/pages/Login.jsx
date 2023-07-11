import React,{} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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