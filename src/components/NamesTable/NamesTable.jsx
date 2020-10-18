import React from 'react';
import './NamesTable.css';
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const NamesTable = (props) => {
    if (props.gender === 'Boy') {
        const names =
            props.names.length > 0 ?
                <DragDropContext onDragEnd={props.onDragEnd} user={props.user}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <Droppable droppableId='dp1' user={props.user}>
                            {(provided) => (
                                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                    {props.names.filter(name => (props.user._id === name.user)).map((name, index) =>
                                        <Draggable key={index} draggableId={index + ''} index={index} user={props.user}>
                                            {(provided) => (
                                                <tr key={index} ref={provided.innerRef} id='boy-tr'
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <Link to={{ pathname: '/details', state: { name } }} >{name.name}</Link>
                                                    </td>
                                                </tr>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                </tbody>
                            )}
                        </Droppable>
                    </table>
                </DragDropContext>
                :
                <h1>Add A Name!</h1>
        return (
            <div className='NamesTable'>
                {names}
            </div >
        )
    } else if (props.gender === 'Girl') {
        const names =
            props.names.length > 0 ?
                <DragDropContext onDragEnd={props.onDragEnd} user={props.user}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <Droppable droppableId='dp1' user={props.user}>
                            {(provided) => (
                                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                    {props.names.filter(name => (props.user._id === name.user)).map((name, index) =>
                                        <Draggable key={index} draggableId={index + ''} index={index} user={props.user}>
                                            {(provided) => (
                                                <tr key={index} ref={provided.innerRef} id='girl-tr'
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <Link to={{ pathname: '/details', state: { name } }} >{name.name}</Link>
                                                    </td>
                                                </tr>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                </tbody>
                            )}
                        </Droppable>
                    </table>
                </DragDropContext>
                :
                <h1>Add A Name!</h1>
        return (
            <div className='NamesTable'>
                {names}
            </div >
        )
    } else if (props.gender === '') {
        const names =
            props.names.length > 0 ?
                <DragDropContext onDragEnd={props.onDragEnd} user={props.user}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <Droppable droppableId='dp1' user={props.user}>
                            {(provided) => (
                                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                    {props.names.filter(name => (props.user._id === name.user)).map((name, index) =>
                                        <Draggable key={index} draggableId={index + ''} index={index} user={props.user}>
                                            {(provided) => (
                                                <tr key={index} ref={provided.innerRef} id='tr'
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <Link to={{ pathname: '/details', state: { name } }} >{name.name}</Link>
                                                    </td>
                                                </tr>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                </tbody>
                            )}
                        </Droppable>
                    </table>
                </DragDropContext>
                :
                <h1>Add A Name!</h1>
        return (
            <div className='NamesTable'>
                {names}
            </div >
        )
    }
}

export default NamesTable;