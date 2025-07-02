import React from 'react'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'
import Booking_Page from './pages/Booking_Page'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Book' element={<Booking_Page/>}/>
      </Routes>
    
     
    </div>
  )
}
