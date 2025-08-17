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

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname.startsWith('/?cat=')
  const isVideoPage = location.pathname.startsWith('/watch/')

  // Determine sidebar behavior (desktop only)
  let sidebarWidth = 240
  if (isHomePage) {
    sidebarWidth = isOpen ? 240 : 70
  } else if (isVideoPage) {
    sidebarWidth = isOpen ? 240 : 0
  } else {
    sidebarWidth = 240
  }

  const showIconsOnly = isHomePage && !isOpen
  const shouldShowFull = isHomePage ? isOpen : true

  return (
    <>
      {/* Desktop Sidebar (unchanged) */}
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
        <nav className="nav flex-column pt-3">
          {SIDEBAR_ITEMS.map(c => (
            <NavLink key={c.slug || 'home'}
              className={({isActive}) => 
                `nav-link px-3 py-2 d-flex align-items-center ${isActive ? 'bg-opacity-10 bg-light' : ''}`
              }
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

      {/* Mobile Sidebar (overlay) */}
      {isOpen && (
        <div 
          className="sidebar-backdrop d-lg-none"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1040
          }}
        />
      )}

      <aside 
        className="sidebar d-lg-none"
        style={{
          width: '240px',
          background: 'var(--bg)', 
          minHeight: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1050,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <nav className="nav flex-column pt-3">
          {SIDEBAR_ITEMS.map(c => (
            <NavLink key={c.slug || 'home'}
              className={({isActive}) => 
                `nav-link px-3 py-2 d-flex align-items-center ${isActive ? 'bg-opacity-10 bg-light' : ''}`
              }
              to={c.slug ? `/?cat=${c.slug}` : '/'}
              end={!c.slug}
              style={{
                color: 'var(--text)', 
                textDecoration: 'none'
              }}
              onClick={onClose}
            >
              <i className={`${c.icon} me-3`} style={{width: '20px'}}></i>
              <span>{c.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
