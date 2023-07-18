import React, { useState } from 'react';
import Kakaomap from './kakaomap';
import '../components/Main.css';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('광주파출소');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <div>
      
      <div className="searchSection">
  <form className="inputForm" onSubmit={handleSubmit}>
    <input
      placeholder="광주 파출소"
      onChange={onChange}
      value={InputText}
      className="inputField"
    />
    <button className="kbtn" type="submit">
      검색
    </button>
  </form>
</div>
<Kakaomap searchPlace={Place} />

    </div>
  );
}

export default LandingPage;