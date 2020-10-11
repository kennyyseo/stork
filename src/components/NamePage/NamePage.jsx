import React from 'react';
import NavBar from '../NavBar/NavBar';

const NamePage = (props) => {
    return (
        <NavBar
            user={props.user}
        />
    )
}

export default NamePage;