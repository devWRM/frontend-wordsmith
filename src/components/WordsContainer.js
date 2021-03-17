import React, { Component } from 'react';

import WordForm from './WordForm.js';

class WordsContainer extends Component {

    render() {
        // debugger;
        return (
            <div>

                <WordForm subject={this.props.subject}/>
                
                {this.props.subject.words.map(word =>
                    <div key={word.id}>
                        <p>{word.spelling}</p>

                    </div>

                )}
            </div>
        )
    }
}


export default WordsContainer;

