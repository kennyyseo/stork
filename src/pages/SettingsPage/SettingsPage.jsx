import React from 'react';
import './SettingsPage.css'

const SettingsPage = (props) => {
    if (props.user && props.names.filter(name => (props.user._id === name.user)).length >= 0) {
        return (
            <div>
                <div>
                    <h1 id='settings'>Settings</h1>
                    <label className='prompt'>Baby Gender: </label>
                    &nbsp;
                    <select id="gender-options" onChange={props.handleGenderChange} value={props.gender}>
                        <option value="">I don't know yet</option>
                        <option value="Boy">Boy</option>
                        <option value="Girl">Girl</option>
                    </select>
                </div>
                <div >
                    <label id='dueDate' value={props.dueDate}>Expected Due Date:</label>
                    &nbsp;
                    <input type="date" name="dueDate" onChange={props.handleDueDateChange} value={props.dueDate} />
                </div>
            </div>
        )
    }
}

export default SettingsPage;