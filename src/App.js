import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom"

import Moodio from "./pages/moodio"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path='/' element={<Moodio/>} ></Route>

        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
