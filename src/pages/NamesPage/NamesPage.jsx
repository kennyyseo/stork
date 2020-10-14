import React from 'react';
import './NamesPage.css';
import NamesTable from '../../components/NamesTable/NamesTable';

const NamesPage = (props) => {
    return (
        <div>
            <h1 className='title'>Baby Names:</h1>
            <NamesTable names={props.names} />
        </div>
    )
}

export default NamesPage;