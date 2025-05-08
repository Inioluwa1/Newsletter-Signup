import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import SecondPage from '../Pages/SecondPage'
import './App.css'

function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/confirm' element={<SecondPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
