import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className='logo' src="https://i.imgur.com/49vugMb.png" alt="" />
                    Stork
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/names' className='nav-link'> My Names </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add' className='nav-link'> Add A Name </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='' onClick={props.handleLogout} className='nav-link'> Log Out </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
        :
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className='logo' src="https://i.imgur.com/49vugMb.png" alt="" />
                    Stork
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/login' className='nav-link'>Log In</Link>
                        </li>
                        <li className="nav-item">
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