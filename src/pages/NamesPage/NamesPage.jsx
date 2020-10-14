import React from 'react';
import './NamesPage.css';
import NamesTable from '../../components/NamesTable/NamesTable';

const NamesPage = (props) => {
    if (props.names.length === 0) {
        return (
            <div>
                <h1 className='title'>Baby Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} />
            </div>
        )
    } else if (props.names.length === 1) {
        return (
            <div>
                <h1 className='title'>Baby Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} />
                <h3 className='directions'>Nice name. Let's add more!</h3>
            </div>
        )
    } else if (props.names.length > 1) {
        return (
            <div>
                <h1 className='title'>Baby Names:</h1>
                <NamesTable names={props.names} onDragEnd={props.onDragEnd} />
                <h3 className='directions'>Drag and drop the names as you like!</h3>
            </div>
        )
    }
}

export default NamesPage;