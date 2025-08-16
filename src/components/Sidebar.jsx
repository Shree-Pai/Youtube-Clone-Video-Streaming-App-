import React from 'react'
import { NavLink } from 'react-router-dom'

const SIDEBAR_ITEMS = [
  {slug: '', label: 'Home', icon: 'fas fa-home'},
  {slug: 'trending', label: 'Trending', icon: 'fas fa-fire'},
  {slug: 'music', label: 'Music', icon: 'fas fa-music'},
  {slug: 'gaming', label: 'Gaming', icon: 'fas fa-gamepad'},
  {slug: 'technology', label: 'Technology', icon: 'fas fa-microchip'},
  {slug: 'news', label: 'News', icon: 'fas fa-newspaper'},
  {slug: 'sports', label: 'Sports', icon: 'fas fa-futbol'},
  {slug: 'education', label: 'Education', icon: 'fas fa-graduation-cap'},
  {slug: 'entertainment', label: 'Entertainment', icon: 'fas fa-film'},
  {slug: 'science', label: 'Science', icon: 'fas fa-flask'},
]

export default function Sidebar() {
  return (
    <aside className="sidebar d-none d-lg-block" style={{width: '240px', background: '#0f0f0f', minHeight: '100vh'}}>
      <nav className="nav flex-column pt-3">
        {SIDEBAR_ITEMS.map(c => (
          <NavLink key={c.slug || 'home'}
            className={({isActive}) => `nav-link px-3 py-2 d-flex align-items-center ${isActive ? 'bg-opacity-10 bg-light' : ''}`}
            to={c.slug ? `/?cat=${c.slug}` : '/'}
            end={!c.slug}
            style={{color: 'white', textDecoration: 'none'}}>
            <i className={`${c.icon} me-3`} style={{width: '20px'}}></i>
            <span>{c.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
