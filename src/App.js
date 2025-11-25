import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { AgentManagement } from './features/agents/AgentManagement';
import { AddAgent } from './features/agents/AddAgent';
import { AgentDelete } from './features/agents/AgentDelete';
import { AgentDetails } from './features/agents/AgentDetails';
import { UserName } from './features/agents/UserName';

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

      <Link to="/add"> הוספת סוכן</Link>
      <Link to="/management">ניהול סוכנים</Link>
      <Routes>
        <Route path='management' element={<AgentManagement />} />
        <Route path='add' element={<AddAgent />} />
        {/* <Route path='card' element={<AgentManagement />} /> */}
        <Route path='delete' element={<AgentDelete />} />
        <Route path='details' element={<AgentDetails />} />
        <Route path='userName' element={<UserName />} />

        <Route path='*' element={<AgentManagement />} />

      </Routes>
    </div>
  );
}

export default App;
