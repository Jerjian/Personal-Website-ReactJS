import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navigation/NavBar'
import Main from './components/main/Main'


export default function(){
  return(
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  )
}