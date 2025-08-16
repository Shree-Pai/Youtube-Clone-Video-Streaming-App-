import React from 'react'
import { NavLink } from 'react-router-dom'

const CATS = [
  {slug:'', label:'Home'},
  {slug:'trending', label:'Trending'},
  {slug:'music', label:'Music'},
  {slug:'gaming', label:'Gaming'},
  {slug:'technology', label:'Technology'},
]

export default function Sidebar() {
  return (
    <aside className="sidebar px-3 d-none d-lg-block">
      <nav className="nav flex-column">
        {CATS.map(c => (
          <NavLink key={c.slug || 'home'}
            className={({isActive}) => 'nav-link px-3 py-2 '+(isActive ? 'bg-opacity-10 bg-light' : '')}
            to={c.slug ? `/?cat=${c.slug}` : '/'}
            end={!c.slug}>
            {c.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
