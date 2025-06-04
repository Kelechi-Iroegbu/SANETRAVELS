import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
        <Home/>
     
    </div>
  )
}
