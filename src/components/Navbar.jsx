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
    <nav className="navbar navbar-expand-lg sticky-top" style={{background: 'var(--bg-soft)'}}>
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold" href="/" onClick={(e)=>{e.preventDefault(); navigate('/')}}>
          <span className="text-danger">Y</span>T Clone
        </a>

        <form className="d-flex flex-grow-1 mx-3" role="search" onSubmit={onSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            value={q} onChange={e=>setQ(e.target.value)} />
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-light" onClick={toggle}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <div className="rounded-circle bg-secondary" style={{width:36,height:36}} title="Profile"></div>
        </div>
      </div>
    </nav>
  )
}
