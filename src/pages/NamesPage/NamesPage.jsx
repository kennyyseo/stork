import React, { useEffect } from 'react';
import './NamesPage.css';
import NamesTable from '../../components/NamesTable/NamesTable';
import { Redirect } from 'react-router';
import logo from '../../assets/listgif_igl9j7.gif';
import DueDateCountdown from '../../components/DueDateCountdown/DueDateCountdown';

const NamesPage = (props) => {
    // useEffect(
    //     () => {
    //         props.calculateDaysLeft();
    //     }
    // )
    if (props.names.filter(name => (props.user._id === name.user)).length === 0) {
        return (
            <Redirect to="/" />
        )
    } else if (props.names.filter(name => (props.user._id === name.user)).length === 1) {
        return (
            <div>
                <h1 id='title'>Baby {props.gender} Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} user={props.user} gender={props.gender} />
                <h3 className='directions'>Nice name. Let's add more!</h3>
            </div>
        )
    } else if (props.names.filter(name => (props.user._id === name.user)).length > 1) {
        return (
            <div>
                <DueDateCountdown daysLeft={props.daysLeft} gender={props.gender} calculateDaysLeft={props.calculateDaysLeft} />
                <h1 id='title'>Baby {props.gender} Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} user={props.user} gender={props.gender} />
                <img id='gif' src={logo} alt="loading..." />
                <h3 id='directions'>Drag and drop the names as you like!</h3>
            </div>
        )
    }
}

export default NamesPage;

