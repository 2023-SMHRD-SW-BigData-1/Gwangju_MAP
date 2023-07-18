import React, { useState } from 'react'
import Kakaomap from './kakaomap'
import '../components/Main.css'

function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('광주파출소')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
     <>
    {/* <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search" onSubmit={handleSubmit}>
      <input class="form-control me-2" type="search" placeholder="광주 파출소" aria-label="Search" onChange={onChange} value={InputText}/>
      <button class="btn btn-outline-success" type="submit">검색</button>
    </form>
  </div>
</nav> */}


<form className="inputForm" onSubmit={handleSubmit}>
  <input placeholder="광주 파출소" onChange={onChange} value={InputText} />
  <button className='kbtn' type="submit">검색</button>
</form>
<Kakaomap searchPlace={Place} />


</> 



)

}

export default LandingPage;