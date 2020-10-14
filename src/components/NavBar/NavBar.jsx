import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className='logo' src="https://i.imgur.com/49vugMb.png" alt="" />
                    Stork
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link to='/names' className='nav-link'> My Names </Link>
                        </li>
                        <li>
                            <Link to='/add' className='nav-link'> Add A Name </Link>
                        </li>
                        <li>
                            <Link to='' onClick={props.handleLogout} className='nav-link'> Log Out </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
        :
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className='logo' src="https://i.imgur.com/49vugMb.png" alt="" />
                    Stork
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link to='/login' className='nav-link'>Log In</Link>
                        </li>
                        <li>
                            <Link to='/signup' className='nav-link'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    )
}

export default NavBar;