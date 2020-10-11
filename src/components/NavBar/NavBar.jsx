import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='/names' className='NavBar-link'> My Names </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/add' lassName='NavBar-link'> Add A Name </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout} className='NavBar-link'> Log Out </Link>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>Log In</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='signup' className='NavBar-link'>Sign Up</Link>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    )
}

export default NavBar;