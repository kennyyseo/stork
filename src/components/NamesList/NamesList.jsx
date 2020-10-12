import React from 'react';
import './NamesList.css';

const NamesList = (props) => {
    return (
        <div className='NamesList'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Meaning</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.names.map((name, idx) =>
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{name.name}</td>
                            <td>{name.meaning}</td>
                            <td>{name.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default NamesList;