import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <section className='menu cid-rGcxRXmoaQ' id='menu2-1'>
    <nav className='navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm box-shadow'>
      <button
        className='navbar-toggler navbar-toggler-right'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <div className='hamburger'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className='menu-logo'>
        <div className='navbar-brand'>
          <span className='navbar-logo'>
            <a href='https://hikaya.io'>
              <img src='assets/images/hikaya_logo.png' alt='Hikaya' title='' />
            </a>
          </span>
        </div>
      </div>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div>
          <ul className='navbar-nav nav-dropdown'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link link nav-font dropdown-toggle'
                data-toggle='dropdown-submenu'
                role='button'
                // role='menu'
                // aria-haspopup='true'
                aria-expanded='false'
              >
                About
                <i class='fas fa-chevron-down nav-arrow'></i>
              </a>

              <div className='dropdown-menu about-dropdown'>
                <a className='dropdown-item' href='index#content4-3'>
                  <img
                    className='book-icon'
                    src='/assets/images/book.png'
                    alt='book icon'
                  />
                  Our story
                </a>

                <Link href='/teamPage'>
                  <a className='dropdown-item'>
                    <i class='far fa-user team-icon'></i>
                    Team
                  </a>
                </Link>
                <a className='dropdown-item' href='#'>
                  <img
                    className='cogs-icon'
                    src='/assets/images/cogs.png'
                    alt='cogs icon'
                  />
                  Engineering
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link link nav-font' href='index#content4-8'>
                Products
              </a>
            </li>
            <Link href='/blogs'>
              <li className='nav-item'>

                <a className='nav-link link nav-font'>Blogs</a>

              </li>
            </Link>
          </ul>
        </div>
        <div className='navbar-buttons mbr-section-btn'>
          <a
            className='btn btn-sm btn-primary-outline display-4 btn-nav'
            href='https://activity.hikaya.app/accounts/login/'
            target='_blank'
          >
            Login
          </a>
          <a
            className='btn btn-sm btn-primary display-4 btn-nav'
            href='index#content4-8'
          >
            Join
          </a>
        </div>
      </div>
    </nav>
  </section>
);

export default Nav;
