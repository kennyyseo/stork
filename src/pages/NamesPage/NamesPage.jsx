import React from 'react';
import './NamesPage.css';
import NamesList from '../../components/NamesList/NamesList';

const NamesPage = (props) => {
    return (
        <div>
            <NamesList names={props.names} />
        </div>
    )
}

export default NamesPage;