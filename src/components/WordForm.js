import React, { Component } from 'react';

class WordForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spelling: "",
            pos: "",
            definition: "",
            sentences: ""
        }
    }

    handleChange = (e) => {
    // debugger;
    // NOTE e.target.value =>> single character user typed into field box
        const { name, value } = e.target

        this.setState({
            [name]: value
        })

}


    handleSubmit = (e) => {
        e.preventDefault()
    }



    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Word spelling</label>
                <input onChange={this.handleChange} type="text" value={this.state.name} name="spelling"></input><br></br>

                <label>Part of speech</label>
                <input onChange={this.handleChange} type="text" value={this.state.pos} name="pos"></input><br></br>

                <label>Definition</label>
                <input onChange={this.handleChange} type="text" value={this.state.definition} name="definition"></input><br></br>

                <label>Sentences</label>
                <input onChange={this.handleChange} type="text" value={this.state.sentences} name="sentences"></input><br></br>

                <input type="submit" value="Create word"></input><br></br>
            </form>
            </div>
        )
    }
}


export default WordForm;
