import { useState } from 'react'
import './App.css'
import {Browserrouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.jsx'

function App() {

  return (
    <div className='app'>
      <h1>GitHub User Search</h1>
      <Home />
    </div>
  );
}

export default App
