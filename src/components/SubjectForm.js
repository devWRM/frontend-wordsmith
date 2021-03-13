import React, { Component } from 'react'

class SubjectForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }


    render() {
        return (
            <form>
                <label>Subject Name: </label>
                <input type='text' value={this.state.nam} onChange={this.handleChange} name='name'></input>
                <input type='submit' value='New Subject'></input>
            </form>
        )
    }
}

export default SubjectForm;
