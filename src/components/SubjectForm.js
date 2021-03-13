import React, { Component } from 'react'

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

    


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Subject Name: </label>
                <input type='text' value={this.state.nam} onChange={this.handleChange} name='name'></input>
                <input type='submit' value='New Subject'></input>
            </form>
        )
    }
}

export default SubjectForm;
