import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Main from './components/Main';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <div className="warp">
    <Routes>
      <Route path='/pages' element={<Main/>}></Route>
      <Route path='/pages/Login' element={<Login/>}></Route>
      <Route path='/pages/Join' element={<Join/>}></Route>
    </Routes>




    </div>
  );
}

export default App;
