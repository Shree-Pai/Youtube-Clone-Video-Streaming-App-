import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useTheme } from './ThemeContext.jsx'

export default function Navbar() {
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
    <nav className="navbar navbar-expand-lg sticky-top" style={{background: '#0f0f0f', borderBottom: '1px solid #272727'}}>
      <div className="container-fluid">
        {/* Left section */}
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-white me-3" style={{fontSize: '18px'}}>
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand text-white fw-bold d-flex align-items-center" href="/" onClick={(e)=>{e.preventDefault(); navigate('/')}}>
            <i className="fab fa-youtube text-danger me-1" style={{fontSize: '24px'}}></i>
            <span>YouTube</span>
            <span className="ms-1 text-muted" style={{fontSize: '12px'}}>IN</span>
          </a>
        </div>

        {/* Center search section */}
        <div className="d-flex flex-grow-1 justify-content-center" style={{maxWidth: '600px'}}>
          <form className="d-flex w-100" role="search" onSubmit={onSubmit}>
            <div className="input-group">
              <input 
                className="form-control" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                style={{
                  background: '#121212', 
                  border: '1px solid #303030', 
                  color: 'white',
                  borderRadius: '20px 0 0 20px'
                }}
                value={q} 
                onChange={e=>setQ(e.target.value)} 
              />
              <button 
                className="btn btn-outline-secondary" 
                type="submit"
                style={{
                  background: '#222222', 
                  border: '1px solid #303030', 
                  borderLeft: 'none',
                  borderRadius: '0 20px 20px 0',
                  color: 'white'
                }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <button className="btn btn-link text-white ms-2" style={{fontSize: '18px'}}>
            <i className="fas fa-microphone"></i>
          </button>
        </div>

        {/* Right section */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-white" style={{fontSize: '18px'}}>
            <i className="fas fa-video"></i>
          </button>
          <button className="btn btn-link text-white" style={{fontSize: '18px'}}>
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
