import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom"

import Moodio from "./pages/moodio"
import Home from "./pages/home"

import Layout from './Layout';


function App() {
  return (
    <div className="App">
      <Layout/>
      <Router>
        <Routes>

        <Route path='/' element={<Moodio/>} ></Route>
        <Route path='home' element={<Home/>} ></Route>


        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
