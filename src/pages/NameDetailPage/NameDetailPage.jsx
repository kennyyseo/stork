import React from 'react';
import NameCard from '../../components/NameCard/NameCard';

const NameDetailPage = (props) => {
    const name = props.location.state.name
    return (
        <div>
            <h3>Name Details</h3>
            <NameCard
                key={name._id}
                name={props.location.state.name}
                handleDeleteName={props.handleDeleteName}
            />
        </div>
    )
}

export default NameDetailPage;