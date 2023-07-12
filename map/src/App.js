import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import BoardList from './components/board/BoardList';

function App() {
  return (
    <div className="warp">
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/pages/Login' element={<Login/>}></Route>
      <Route path='/pages/Login/pages/Join' element={<Join/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
