import React from 'react'
import './topbar.css'
import srikanth from './srikanth.png';
import {Link} from 'react-router-dom';
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__logo">
                <img src={srikanth} alt="logo"/>
            </div>
            <div className="topbar__links">
                <ul className="topbar__links__pages">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><li>Home</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}><li>About</li></Link>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}> <li>Categories</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Topbar