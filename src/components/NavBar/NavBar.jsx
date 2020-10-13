import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img className='logo' src="https://i.imgur.com/49vugMb.png" alt="" />
                    Stork
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/names' class='nav-link'> My Names </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/add' class='nav-link'> Add A Name </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='' onClick={props.handleLogout} class='nav-link'> Log Out </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
        :
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img className='logo' src="https://i.imgur.com/49vugMb.png" alt="" />
                    Stork
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/login' class='nav-link'>Log In</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/signup' class='nav-link'>Sign Up</Link>
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