import React, { Component } from 'react';
import './AddNamePage.css'
import { Link } from 'react-router-dom';

class AddNamePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            meaning: '',
            description: '',
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddName(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1 className='title'>Add Baby {this.props.gender} Name</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Baby Name (required)</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Name Meaning</label>
                        <input
                            className="form-control"
                            name="meaning"
                            value={this.state.formData.meaning}
                            onChange={this.handleChange}
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
                        className="btn btn-success"
                        disabled={this.state.invalidForm}
                    >
                        Add Name
                    </button>
                    &nbsp;
                    <Link to='/names'>Cancel</Link>
                </form>
            </>
        );
    }
}



export default AddNamePage