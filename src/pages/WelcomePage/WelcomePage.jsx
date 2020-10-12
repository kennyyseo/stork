import React from 'react';
import './WelcomePage.css'

const WelcomePage = (props) => {
    return (
        <div>
            <h1 id='greeting'>Welcome to Stork!</h1>
            <h3>Do you know the gender of your baby?</h3>
            <label for="items">Gender</label>
            <select id="items">
                <option value="item-1">Male</option>
                <option value="item-2">Female</option>
            </select>
        </div>
    )
}

export default WelcomePage;