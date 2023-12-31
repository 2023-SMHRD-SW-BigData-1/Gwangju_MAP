import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import BoardList from './components/board/BoardList';
import Write from './components/board/Write';
import Detail from './components/board/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kakaomap from '../src/pages/kakaomap'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from './components/Header';

function App() {

  const getData = (obj)=>{
    console.log('getData Function in App.js', obj)
  }
  return (
    <div className="warp">
      <Header/>
      {/* <BoardList></BoardList> */}
      {/* <Write></Write> */}
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/pages/Login' element={<Login/>}></Route>
      <Route path='/pages/Login/pages/Join' element={<Join/>}></Route>
        <Route path='/list' element={<BoardList getData={getData}/>}></Route>
        <Route path='/list/write' element={<Write/>}></Route>
        {/* <Route path='/list/update' element={<Update/>}></Route> */}
        <Route path='/list/detail/:id' element={<Detail/>}></Route>
        
    
      </Routes>
    
    
    </div>
  );
}

export default App;
