import React from 'react';
import './WelcomePage.css'

const WelcomePage = (props) => {
    return (
        <div>
            <h1 id='greeting'>Welcome to Stork!</h1>
            <h3 id='question'>Do you know the gender of your baby?</h3>
            <select id="items">
                <option value="item-1">Yes</option>
                <option value="item-2">No</option>
            </select>
        </div>
    )
}

export default WelcomePage;