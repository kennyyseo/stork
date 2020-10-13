import React from 'react';
import NameCard from '../../components/NameCard/NameCard';

const NameDetailPage = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Name Details</h3>
            <NameCard name={props.location.state.name} />
        </div>
    )
}

export default NameDetailPage;