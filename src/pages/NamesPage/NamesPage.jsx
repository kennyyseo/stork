import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './NamesPage.css';
import NamesList from '../../components/NamesList/NamesList';

const NamesPage = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <NamesList />
        </div>
    )
}

export default NamesPage;