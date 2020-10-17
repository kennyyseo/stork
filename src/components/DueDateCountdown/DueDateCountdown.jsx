import React from 'react';
import Ticker from 'react-ticker';
import './DueDateCounter.css'

const DueDateCountdown = (props) => {
    return (
        <Ticker id='ticker' speed="10" mode='smooth' >
            {({ index }) => (
                <>
                    <h1 id='notification'>Your baby {props.gender.toLowerCase()} arrives in {props.daysLeft} days!</h1>
                </>
            )}
        </Ticker >
    )
}

export default DueDateCountdown;
