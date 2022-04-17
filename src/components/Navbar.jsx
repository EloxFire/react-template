import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-side">
        <Link className="nav-link nav-title" to="/" >Clickable title</Link>
        <button className="nav-dropdown">Button</button>
      </div>
      <div className="center-side">
        <Link className="nav-link" to="/" >Link 1</Link>
        <Link className="nav-link" to="/" >Link 2</Link>
        <Link className="nav-link" to="/" >Link 3</Link>
        <Link className="nav-link" to="/" >Link 4</Link>
      </div>
      <div className="right-side">
        <form>
          <input type="text" />
        </form>
      </div>
    </nav>
  )
}
