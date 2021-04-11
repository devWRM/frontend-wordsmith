import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newSubject } from '../actions/subjectActions.js';


class SubjectForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleChange = e => {
        // console.log(e.target)
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.newSubject(this.state)

        this.setState({
            name: ""
        })        
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="subject-form">
                <label>Add a subject name: </label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name' className="subject-name"></input>
                <input type='submit' value='New Subject'></input>
            </form>
        )
    }
}

export default connect(null, { newSubject })(SubjectForm);
