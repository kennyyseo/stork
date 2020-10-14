import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditNamePage.css'

class EditNamePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.name
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateName(this.state.formData);
    }


    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    render() {
        return (
            <>
                <h1 className='title'>Edit Name</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Baby's Name (required)</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div >
                    <div className="form-group">
                        <label>Meaning</label>
                        <input
                            className="form-control"
                            name="meaning"
                            value={this.state.formData.meaning}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            className="form-control"
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs btn-success"
                        disabled={this.state.invalidForm}
                    >
                        Save Name
                    </button>
                    &nbsp;
                    <Link to='/names'>Cancel</Link>
                </form >
            </>
        );
    }
}





export default EditNamePage;