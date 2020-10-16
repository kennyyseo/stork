import React from 'react';

const SettingsPage = (props) => {
    if (props.user && props.names.filter(name => (props.user._id === name.user)).length >= 0) {
        return (
            <div>
                <h3 className='prompt'>What's your baby's gender?</h3>
                <select id="gender-options" onChange={props.handleGenderChange} value={props.gender}>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                    <option value="">I don't know yet</option>
                </select>
            </div>
        )
    }
}

export default SettingsPage;