import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {useNavigate}  from 'react-router-dom'
const oracledb = require('oracledb');

function Join() {

  const nav = useNavigate()

  // let이 아닌 이유는 다른 사용자가 수정을 못하게 하기 위해
  const idRef = useRef();
  const pwRef = useRef();
  const addRef = useRef();

  const [userData,setUserData] = useState({})
  
  // ...은 코드 아니고 함수 적은거임
  const handleJoin = (e)=>{
    console.log('handle Join Function', idRef.current.value, pwRef.current.value, addRef.current.value)
    
setUserData({
  id : idRef.current.value,
  pw : pwRef.current.value,
  add : addRef.current.value 
})

    // form이 sumit 되지 못하도록 작업
    e.preventDefault();

  }

  useEffect(()=>{
    console.log('userData :', userData.id);
    /*
    useEffect의 특성 상, 무조건 화면의 첫 갱신떄 함수가 호출될 수 밖에 없다.
    비어있는 값을 가지고 회원가입을 하면 안되니까 화면의 첫 갱신떄는 회원가입 로직이
    실행되지 않도록 조건을 걸어둔 것!
     */
    userData.id !== undefined && 
    axios.post('http://localhost:8888/user/join',{
      userData : userData
    })
    .then((res)=>{
      console.log(res.data.result)
      if(res.data.result == 'success'){
        alert('회원가입에 성공하셨습니다!')
        nav('/')
      }else if (res.data.result ==='duplicated'){
        alert('중복된 아이디 입니다. 다시 입력해주세요')
        idRef.current.value = ""
        pwRef.current.value = ""
        addRef.current.value = ""
        idRef.current.focus()
      }
    })
    .catch(()=>{
      console.error('Failed to Join')
    })

  },[userData])

  return (
    <div className='main-box info-box'> 
    <Form onSubmit={handleJoin}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" placeholder="Enter Id"  ref={idRef}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1" >
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St"  ref={addRef}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Join;