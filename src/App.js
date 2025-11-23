import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Xempol1 } from './componnt/Xempol1';
import { Xempol2 } from './componnt/Xempol2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Link to="ex1">דוגמא אחת</Link>
      <Link to="ex2">דוגמא 2</Link>
      <Routes>
        <Route path='ex1' element={<Xempol1 />} />
        <Route path='ex2' element={<Xempol2 />} />
      </Routes>
    </div>
  );
}

export default App;
