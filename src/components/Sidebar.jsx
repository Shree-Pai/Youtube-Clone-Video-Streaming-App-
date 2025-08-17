import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

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

export default function Sidebar({ isOpen }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname.startsWith('/?cat=')
  const isVideoPage = location.pathname.startsWith('/watch/')
  
  // Determine sidebar behavior based on current page
  let sidebarWidth = 240 // default full width
  
  if (isHomePage) {
    // Home page: icons-only when collapsed, full when open
    sidebarWidth = isOpen ? 240 : 70
  } else if (isVideoPage) {
    // Video page: full when open, completely hidden when closed
    sidebarWidth = isOpen ? 240 : 0
  } else {
    // Other pages: always full width
    sidebarWidth = 240
  }
  
  const showIconsOnly = isHomePage && !isOpen
  const shouldShowFull = isHomePage ? isOpen : true

  return (
    <aside 
      className={`sidebar d-none d-lg-block ${isOpen ? 'sidebar-open' : 'sidebar-collapsed'}`} 
      style={{
        width: `${sidebarWidth}px`,
        background: 'var(--bg)', 
        minHeight: '100vh',
        overflow: 'hidden',
        transition: 'width 0.3s ease'
      }}
    >
      <nav className="nav flex-column pt-3" style={{opacity: '1', transition: 'opacity 0.3s ease'}}>
        {SIDEBAR_ITEMS.map(c => (
          <NavLink key={c.slug || 'home'}
            className={({isActive}) => `nav-link px-3 py-2 d-flex align-items-center ${isActive ? 'bg-opacity-10 bg-light' : ''}`}
            to={c.slug ? `/?cat=${c.slug}` : '/'}
            end={!c.slug}
            style={{
              color: 'var(--text)', 
              textDecoration: 'none',
              justifyContent: showIconsOnly ? 'center' : 'flex-start'
            }}
            title={showIconsOnly ? c.label : ''}
          >
            <i className={`${c.icon} ${showIconsOnly ? '' : 'me-3'}`} style={{width: '20px'}}></i>
            {shouldShowFull && <span>{c.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
