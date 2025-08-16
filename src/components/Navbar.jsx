import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useTheme } from './ThemeContext.jsx'

export default function Navbar({ onSidebarToggle, sidebarOpen }) {
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const { theme, toggle } = useTheme()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!q.trim()) return
    navigate(`/search?q=${encodeURIComponent(q.trim())}`)
    setQ('')
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{background: 'var(--bg)', borderBottom: '1px solid var(--border)'}}>
      <div className="container-fluid">
        {/* Left section - Hamburger menu and logo */}
        <div className="d-flex align-items-center">
          <div
            className="hamburger-btn me-3"
            style={{
              fontSize: '18px',
              color: 'var(--text)',
              transition: 'all 0.2s ease',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={onSidebarToggle}
            title={sidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
          >
            <i className="fas fa-bars"></i>
          </div>
          <a className="navbar-brand fw-bold d-flex align-items-center" href="/" onClick={(e)=>{e.preventDefault(); navigate('/')}} style={{color: 'var(--text)'}}>
            <i className="fab fa-youtube text-danger me-1" style={{fontSize: '24px'}}></i>
            <span>YouTube</span>
            <span className="ms-1" style={{fontSize: '12px', color: 'var(--muted)'}}>IN</span>
          </a>
        </div>

        {/* Center section - Search bar */}
        <div className="d-flex flex-grow-1 justify-content-center" style={{maxWidth: '600px'}}>
          <form className="d-flex w-100" role="search" onSubmit={onSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  background: 'var(--search-bg)',
                  border: '1px solid var(--search-border)',
                  color: 'var(--text)',
                  borderRadius: '20px 0 0 20px'
                }}
                value={q}
                onChange={e=>setQ(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                style={{
                  background: 'var(--button-bg)',
                  border: '1px solid var(--search-border)',
                  borderLeft: 'none',
                  borderRadius: '0 20px 20px 0',
                  color: 'var(--text)'
                }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <button className="btn btn-link ms-2" style={{fontSize: '18px', color: 'var(--text)'}}>
            <i className="fas fa-microphone"></i>
          </button>
        </div>

        {/* Right section - Action buttons and profile */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link" style={{fontSize: '18px', color: 'var(--text)'}}>
            <i className="fas fa-video"></i>
          </button>
          <button className="btn btn-link" style={{fontSize: '18px', color: 'var(--text)'}}>
            <i className="fas fa-bell"></i>
          </button>
          <button className="btn btn-outline-light" onClick={toggle} style={{fontSize: '14px'}}>
            {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Dark' : 'Light'}
          </button>
          <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold"
               style={{width:32, height:32, fontSize: '14px'}} title="Profile">
            S
          </div>
        </div>
      </div>
    </nav>
  )
}
