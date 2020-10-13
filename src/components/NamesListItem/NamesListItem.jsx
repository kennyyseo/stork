import React from 'react';
import { Link } from 'react-router-dom';
import './NamesListItem.css'

const NamesListItem = (props) => {
    return (
        <tr>
            <th scope="row">1</th>
            <td><Link to='/details'> name </Link></td>
        </tr>
    )
}


export default NamesListItem;