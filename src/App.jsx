import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import Search from './pages/Search.jsx'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <ThemeProvider>
      <div className="app-shell" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        
        {/* Navbar (with mobile toggle button) */}
        <Navbar onSidebarToggle={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="app-content d-flex">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

          {/* Backdrop only in mobile when sidebar is open */}
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
                zIndex: 1040
              }}
            />
          )}

          {/* Main page content */}
          <main className="flex-grow-1" style={{ zIndex: 1 }}>
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