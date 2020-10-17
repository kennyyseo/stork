import React from 'react';
import './WelcomePage.css'

const WelcomePage = (props) => {
    if (props.user && props.names.filter(name => (props.user._id === name.user)).length === 0 && props.gender === '') {
        return (
            <div>
                <h1 id='greeting'>Welcome, {props.user.name}!</h1>
                <h3 className='prompt'>What's your baby's gender?</h3>
                <select id="gender-options" onChange={props.handleGenderChange} value={props.gender}>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                    <option value="">Don't know yet</option>
                </select>
            </div>
        )
    } else if (props.user && props.names.filter(name => (props.user._id === name.user)).length === 0 && (props.gender === 'Boy' || props.gender === 'Girl')) {
        return (
            <div>
                <h1 id='greeting'>Welcome, {props.user.name}!</h1>
                <h3 className='prompt'>What's your baby's gender?</h3>
                <select id="gender-options" onChange={props.handleGenderChange} value={props.gender}>
                    <option value="">I don't know yet</option>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                </select>
            </div>
        )
    } else if (props.user && props.names.filter(name => (props.user._id === name.user)).length > 0) {
        return (
            <div>
                <h1 id='greeting'>Welcome, {props.user.name}!</h1>
                <h3 className='prompt'>We're so excited for your baby {props.gender.toLowerCase()}!</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h1 id='greeting'>Welcome, Guest!</h1>
                <h3 className='prompt'>Please sign up or log in.</h3>
            </div>
        )
    }
}

export default WelcomePage;