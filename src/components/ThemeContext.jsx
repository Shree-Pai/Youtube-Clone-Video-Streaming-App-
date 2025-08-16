import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage or default to light
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme)
    // Apply theme to document body
    document.body.className = theme
  }, [theme])

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
