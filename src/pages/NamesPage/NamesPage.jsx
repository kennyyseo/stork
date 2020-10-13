import React from 'react';
import './NamesPage.css';
import NamesTable from '../../components/NamesTable/NamesTable';

const NamesPage = (props) => {
    return (
        <div>
            <NamesTable names={props.names} />
        </div>
    )
}

export default NamesPage;