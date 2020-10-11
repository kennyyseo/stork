import React from 'react';

const NamesList = (props) => {
    return (
        <div>
            <table striped>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Meaning</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Taylor</td>
                        <td>Beautiful</td>
                        <td>If only Sarah liked the name</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NamesList;