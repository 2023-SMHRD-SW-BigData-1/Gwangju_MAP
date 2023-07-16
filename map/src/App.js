import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import BoardList from './components/board/BoardList';
import Write from './components/board/Write';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kakaomap from '../src/pages/kakaomap'
import { useEffect } from 'react';


function App() {
  return (
    <div className="warp">
      {/* <BoardList></BoardList> */}
      {/* <Write></Write> */}
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/pages/Login' element={<Login/>}></Route>
      <Route path='/pages/Login/pages/Join' element={<Join/>}></Route>
        {/* <Route path='/' element={<BoardList/>}></Route> */}
    
      </Routes>

    </div>
  );
}

export default App;
