import React from 'react';
import NameCard from '../../components/NameCard/NameCard';

const NameDetailPage = (props) => {
    // const name = props.location.state.name;
    return (
        <>
            <h1>Name Details</h1>
            <NameCard />
        </>
    )
}

export default NameDetailPage;