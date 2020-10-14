import React from 'react';
import './NamesTable.css';
import { Link } from 'react-router-dom'

const NamesTable = (props) => {
    const names =
        props.names.length > 0 ?
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.names.map((name, i) =>
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>
                                <Link to={{
                                    pathname: '/details',
                                    state: {
                                        name,
                                    },
                                }} >
                                    {name.name}
                                </Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
            :
            <h1>Add A Name!</h1>
    return (
        <div className='NamesTable'>
            {names}
        </div >
    )
}

export default NamesTable;