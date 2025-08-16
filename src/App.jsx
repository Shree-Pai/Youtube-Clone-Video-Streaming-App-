import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import Search from './pages/Search.jsx'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <ThemeProvider>
      <div className="app-shell" style={{background: 'var(--bg)', minHeight: '100vh'}}>
        <Navbar onSidebarToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className="app-content d-flex">
          <Sidebar isOpen={sidebarOpen} />
          {/* Mobile backdrop */}
          {sidebarOpen && (
            <div 
              className="sidebar-backdrop d-lg-none" 
              onClick={closeSidebar}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 999
              }}
            />
          )}
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
