import React from 'react'

const Nav = () => (
  <section className="menu cid-rGcxRXmoaQ" id="menu2-1">
    <nav
      className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm box-shadow"
    >
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="menu-logo">
        <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="https://hikaya.io">
                <img
                  src="assets/images/hikaya_logo.png"
                  alt="Hikaya"
                  title=""
                />
              </a>
            </span>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li className="nav-item">
              <a className="nav-link link nav-font" href="index.html#content4-3">
                About</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link link nav-font" href="index.html#content4-8">
                Products</a
              >
            </li>
          </ul>
        </div>
        <div className="navbar-buttons mbr-section-btn">
          <a
            className="btn btn-sm btn-primary-outline display-4 btn-nav"
            href="https://activity.hikaya.app/accounts/login/"
            target="_blank"
          >
            Login</a
          >
          <a
            className="btn btn-sm btn-primary display-4 btn-nav"
            href="index.html#content4-8"
          >
            Join</a
          >
        </div>
      </div>
    </nav>
  </section>
);

export default Nav
