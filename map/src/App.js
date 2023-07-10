import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="warp">
      <Routes>
      <Route path='/' element={<Main/>}></Route>

      </Routes>


    </div>
  );
}

export default App;
