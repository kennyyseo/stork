import React from 'react';
import './NamesTable.css';
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const NamesTable = (props) => {
    const names =
        props.names.length > 0 ?
            <DragDropContext onDragEnd={props.onDragEnd}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <Droppable droppableId='dp1' >
                        {(provided) => (
                            <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                {props.names.map((name, index) =>
                                    <Draggable key={index} draggableId={index + ''} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <Link to={{ pathname: '/details', state: { name } }} >{name.name}</Link>
                                                    </td>
                                                </tr>
                                            </div>
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </table>
                <h4>Drag and drop the names as you like!</h4>
            </DragDropContext>
            :
            <h1>Add A Name!</h1>
    return (
        <div className='NamesTable'>
            {names}
        </div >
    )
}

export default NamesTable;