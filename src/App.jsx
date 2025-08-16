import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import Search from './pages/Search.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-shell" style={{background: '#0f0f0f', minHeight: '100vh'}}>
        <Navbar />
        <div className="app-content d-flex">
          <Sidebar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:id" element={<Video />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
