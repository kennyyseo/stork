import React from 'react';
import './WelcomePage.css'

const WelcomePage = (props) => {
    if (props.user && props.names.filter(name => (props.user._id === name.user)).length === 0) {
        return (
            <div>
                <h1 id='greeting'>Welcome, {props.user.name}!</h1>
                <label className='prompt'>Are you having a baby boy or girl? </label>
                    &nbsp;
                <select id="gender-options" onChange={props.handleGenderChange} value={props.gender}>
                    <option value="">I don't know yet</option>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                </select>
                <br />
                <label for='dueDate' id='dueDate'>What's your baby's due date?</label>
                    &nbsp;
                <input type="date" name="dueDate" onChange={props.handleDueDateChange} value={props.dueDate} />
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