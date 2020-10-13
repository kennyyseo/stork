import React from 'react';
import './NamesTable.css';
import NamesListItem from '../NamesListItem/NamesListItem'

const NamesTable = (props) => {
    return (
        <div className='NamesTable'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.names.map(name => (
                        <NamesListItem />
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default NamesTable;

