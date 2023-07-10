import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import UserList from './Pages/Users/UserList';
import UserDetails from './Pages/Users/UserDetails';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<UserList/>} />
        <Route path={`/user-details/:slug`} element={<UserDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
