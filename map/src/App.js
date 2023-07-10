import './App.css';
import { Route, Routes } from 'react-router';
import Main from './components/Main';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
