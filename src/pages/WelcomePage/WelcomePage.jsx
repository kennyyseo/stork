import React from 'react';
import './WelcomePage.css'

const WelcomePage = (props) => {
    if (props.user && props.names.length === 0) {
        return (
            <div>
                <h1 id='greeting'>Welcome {props.user.name}!</h1>
                <h3 className='prompt'>Do you know the gender of your baby?</h3>
                <select id="items">
                    <option value="item-1">Yes</option>
                    <option value="item-2">No</option>
                </select>
            </div>
        )
    } else if (props.user && props.names.length === 1) {
        return (
            <div>
                <h1 id='greeting'>Welcome back {props.user.name}!</h1>
                <h3 className='prompt'>We like the name you're considering - go ahead and add more!</h3>
            </div>
        )
    } else if (props.user && props.names.length > 1) {
        return (
            <div>
                <h1 id='greeting'>Welcome back {props.user.name}!</h1>
                <h3 className='prompt'>Nice list of names!</h3>
            </div>
        )
    } else if (!props.user) {
        return (
            <div>
                <h1 id='greeting'>Welcome Guest!</h1>
                <h3 className='prompt'>Please sign up or log in.</h3>
            </div>
        )
    };
}

export default WelcomePage;