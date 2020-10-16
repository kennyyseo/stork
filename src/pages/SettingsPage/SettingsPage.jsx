import React from 'react';
import './SettingsPage.css'

const SettingsPage = (props) => {
    if (props.user && props.names.filter(name => (props.user._id === name.user)).length >= 0) {
        return (
            <div>
                <div>
                    <label className='prompt'>Baby Gender: </label>
                    &nbsp;
                    <select id="gender-options" onChange={props.handleGenderChange} value={props.gender}>
                        <option value="">I don't know yet</option>
                        <option value="Boy">Boy</option>
                        <option value="Girl">Girl</option>
                    </select>
                </div>
                <div id='duedate'>
                    <label>Expected Due Date:</label>
                    &nbsp;
                    <input type="date" name="duedate" onChange={props.handleDueDateChange} value={props.duedate} />
                </div>
                {console.log(props.duedate)}
            </div>
        )
    }
}

export default SettingsPage;