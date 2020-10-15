import React from 'react';
import './NamesPage.css';
import NamesTable from '../../components/NamesTable/NamesTable';
import { Redirect } from 'react-router';

const NamesPage = (props) => {
    if (props.names.length === 0) {
        return (
            <Redirect to="/" />
        )
    } else if (props.names.length === 1) {
        return (
            <div>
                <h1 className='title'>Baby {props.gender} Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} user={props.user} />
                <h3 className='directions'>Nice name. Let's add more!</h3>
            </div>
        )
    } else if (props.names.length > 1) {
        return (
            <div>
                <h1 className='title'>Baby {props.gender} Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} user={props.user} />
                <h3 className='directions'>Drag and drop the names as you like!</h3>
            </div>
        )
    }
}

export default NamesPage;