import React from 'react';
import { Link } from 'react-router-dom';
import './NameCard.css'

const NameCard = ({ name, handleDeleteName }) => {
    return (
        <div>
            <div className='panel panel-default'>
                <div>
                    <h3 id='title'>{name.name}</h3>
                </div>
                <div>
                    <dl>
                        <dt>Meaning</dt>
                        <dd className='properties'>{name.meaning}</dd>
                        <dt>Description</dt>
                        <dd className='properties'>{name.description}</dd>
                    </dl>
                </div>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/edit',
                        state: { name },
                    }}
                >
                    EDIT
                </Link>
                <button
                    className="btn btn-xs btn-danger margin-left-10"
                    onClick={() => handleDeleteName(name._id)}
                >
                    DELETE
                </button>
                <div className='panel-footer'>
                    <Link to='/names'>RETURN TO LIST</Link>
                </div>
            </div>
        </div>
    )
}

export default NameCard;