import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="warp">
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/pages/Login' element={<Login/>}></Route>

      </Routes>


    </div>
  );
}

export default App;
