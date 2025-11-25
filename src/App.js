import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { AgentManagement } from './features/agents/AgentManagement';
import { AddAgent } from './features/agents/AddAgent';
import { AgentDelete } from './features/agents/AgentDelete';
import { AgentDetails } from './features/agents/AgentDetails';
import { UserAgent } from './features/agents/UserAgent';
import { useDispatch, useSelector } from 'react-redux';
import { UsernameInputForm } from './features/agents/UsernameInputForm';

function App() {

  // const dispatch = useDispatch();
  const currentUser = useSelector(state => state.agents.currentUser);


  if (!currentUser) {
    return <UsernameInputForm />; // כאן המשתמש מזין שם
  }
  return (
    <div className="App">

      <Link to="/add"> הוספת סוכן</Link>
      <Link to="/management">ניהול סוכנים</Link>
      <Link to="/userAgents">הסוכנים שלי</Link>
      <Routes>
        <Route path='/management' element={<AgentManagement />} />
        <Route path='/add' element={<AddAgent />} />
        <Route path='/delete' element={<AgentDelete />} />
        <Route path='/details' element={<AgentDetails />} />
        <Route path='/userAgents' element={<UserAgent />} />
        <Route path='*' element={<AgentManagement />} />

      </Routes>
    </div>
  );
}

export default App;
