import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "./ThemeContext.jsx"

export default function Navbar({ onSidebarToggle, sidebarOpen }) {
  const navigate = useNavigate()
  const [q, setQ] = useState("")
  const { theme, toggle } = useTheme()
  const [collapsed, setCollapsed] = useState(true) // for navbar collapse (search + icons)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!q.trim()) return
    navigate(`/search?q=${encodeURIComponent(q.trim())}`)
    setQ("")
    setCollapsed(true) // close navbar after search
  }

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        zIndex: 1100, // always above sidebar
      }}
    >
      <div className="container-fluid">
        {/* Left section - Hamburger + Logo */}
        <div className="d-flex align-items-center">
          {/* Hamburger button (works for both mobile & desktop) */}
          <div
            className="hamburger-btn me-3"
            style={{
              fontSize: "18px",
              color: "var(--text)",
              transition: "all 0.2s ease",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={onSidebarToggle}
            title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          >
            <i className="fas fa-bars"></i>
          </div>

          {/* Logo */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center"
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate("/")
              setCollapsed(true)
            }}
            style={{ color: "var(--text)" }}
          >
            <i
              className="fab fa-youtube text-danger me-1"
              style={{ fontSize: "24px" }}
            ></i>
            <span>YouTube</span>
            <span
              className="ms-1"
              style={{ fontSize: "12px", color: "var(--muted)" }}
            >
              IN
            </span>
          </a>
        </div>

        {/* Bootstrap navbar toggler (for collapsing search & icons on small screens) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarContent"
        >
          {/* Center - Search */}
          <div
            className="d-flex flex-grow-1 justify-content-start mt-2 mt-lg-0 ms-10"
            style={{ maxWidth: "600px" }}
          >
            <form className="d-flex w-100" role="search" onSubmit={onSubmit}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    background: "var(--search-bg)",
                    border: "1px solid var(--search-border)",
                    color: "var(--text)",
                    borderRadius: "20px 0 0 20px",
                  }}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  style={{
                    background: "var(--button-bg)",
                    border: "1px solid var(--search-border)",
                    borderLeft: "none",
                    borderRadius: "0 20px 20px 0",
                    color: "var(--text)",
                  }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <button
              className="btn btn-link ms-2"
              style={{ fontSize: "18px", color: "var(--text)" }}
            >
              <i className="fas fa-microphone"></i>
            </button>
          </div>


          {/* Right - Action Buttons */}
          <div className="d-flex align-items-center gap-3 ms-auto mt-2 mt-lg-0">
            {/* <button
              className="btn btn-link"
              style={{ fontSize: "18px", color: "var(--text)" }}
            >
              <i className="fas fa-video"></i>
            </button> */}
            <button
              className="btn btn-link"
              style={{ fontSize: "18px", color: "var(--text)" }}
            >
              <i className="fas fa-bell"></i>
            </button>
            <button
              className="btn btn-outline-light"
              onClick={toggle}
              style={{ fontSize: "14px" }}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <div
              className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold"
              style={{ width: 32, height: 32, fontSize: "14px" }}
              title="Profile"
            >
              S
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
