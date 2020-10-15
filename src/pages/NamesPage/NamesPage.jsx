import React from 'react';
import './NamesPage.css';
import NamesTable from '../../components/NamesTable/NamesTable';
import { Redirect } from 'react-router';

const NamesPage = (props, i) => {
    if (props.names.filter(name => (props.user._id === name.user)).length === 0) {
        return (
            <Redirect to="/" />
        )
    } else if (props.names.filter(name => (props.user._id === name.user)).length === 1) {
        return (
            <div>
                <h1 className='title'>Baby {props.gender} Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} user={props.user} gender={props.gender} />
                <h3 className='directions'>Nice name. Let's add more!</h3>
            </div>
        )
    } else if (props.names.filter(name => (props.user._id === name.user)).length > 1) {
        return (
            <div>
                <h1 className='title'>Baby {props.gender} Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} user={props.user} gender={props.gender} />
                <h3 className='directions'>Drag and drop the names as you like!</h3>
            </div>
        )
    }
}

export default NamesPage;

