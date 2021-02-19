import React from 'react'

function SideBar() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </a>

        <hr className="sidebar-divider my-0"></hr>

        <li className="nav-item active">
          <a className="nav-link" style={{ cursor: 'auto' }}>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider"></hr>

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/login">
            <i className="fas fa-sign-out-alt"></i>
            <span>Sign Out</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
    );
}

export default SideBar
