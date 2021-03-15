import React, { Component } from 'react'

class WordsContainer extends Component {

    render() {
        // debugger;
        return (
            <div>
                
                {this.props.words.map(word =>
                    <div key={word.id}>
                        <p>{word.spelling}</p>

                    </div>

                )}
            </div>
        )
    }
}


export default WordsContainer;

