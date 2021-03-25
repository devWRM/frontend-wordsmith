import React, { Component } from 'react'

class WordLike extends Component {

    constructor() {
        super();
        this.state = {
            heart: false
        }
    }


    handleClick = () => {
        this.setState({
            heart: !this.state.heart
        })
    }

    // let heart = '♡'



    render() {
        return (
            <div>

                <button onClick={this.handleClick}> {this.state.heart ? "❤️" : "♡"} </button>
                

            </div>
        )
    }
}

export default WordLike
