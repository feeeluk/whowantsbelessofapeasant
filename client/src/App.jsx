import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from "./components/NavBar"
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { AboutUs } from './Pages/AboutUs'
import Quiz from './Pages/Quiz'
import Leaderboard from './Pages/Leaderboard'


export default function App() {

  return (
    <main>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </main>

  )
}


