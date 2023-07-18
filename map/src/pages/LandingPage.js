import React, { useState } from 'react'
import Kakaomap from './kakaomap'


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
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="광주 경찰서" onChange={onChange} value={InputText} />
        <button className='kbtn' type="submit">검색</button>
      </form>
      <Kakaomap searchPlace={Place} />
    </>
  )
}

export default LandingPage;