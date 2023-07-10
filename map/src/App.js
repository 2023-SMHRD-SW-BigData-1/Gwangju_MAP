import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
    <div className="warp">
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
