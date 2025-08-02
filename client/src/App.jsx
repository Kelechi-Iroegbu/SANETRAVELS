import React from 'react'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'
import Booking_Page from './pages/Booking_Page'
import Form_Page from './pages/Form_Page'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Booking_Page/>}/>
        <Route path='/Form_page' element={<Form_Page/>} />
      </Routes>
    
     
    </div>
  )
}
