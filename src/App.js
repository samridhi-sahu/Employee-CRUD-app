import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={EmployeeForm} />
      </Routes>
    </Router>
  );
}

export default App;
