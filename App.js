import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginPage from './LoginPage'; 
import InputPage from './InputPage'; 
 
function App() { 
  return ( 
    <Router> 
      <div className="App"> 
        <Routes> 
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/InputPage" element={<InputPage />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
} 
 
export default App;
