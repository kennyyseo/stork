import React from 'react';
import { Link } from 'react-router-dom';
import './NameCard.css'

const NameCard = (props) => {
    return (
        <div>
            <div className='panel panel-default'>
                <div className="panel-heading">
                    <h3 className='panel-title'>{props.name.name}</h3>
                </div>
                <div className='panel-body'>
                    <dl>
                        <dt>Meaning</dt>
                        <dd>{props.name.meaning}</dd>
                        <dt>Description</dt>
                        <dd>{props.name.description}</dd>
                    </dl>
                </div>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/edit',
                    }}
                >
                    EDIT
                </Link>
                <button
                    className="btn btn-xs btn-danger margin-left-10"
                    onClick={() => props.handleDeleteName(props.name._id)}
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