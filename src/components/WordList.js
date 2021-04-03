import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './App.css';
import { deleteWord } from '../actions/wordActions.js';
import WordLike from './WordLike.js';

function WordList(props) {


    let handleDelete = (word) => {
        props.deleteWord(word.id, word.subject_id)
    }

// debugger;

    return (
        <div>
            
            {props.words.map(word =>
                <div key={word.id} className="word-container">
                    
                        <div><button onClick={() => handleDelete(word)}>delete</button></div>
                        <div><WordLike /></div>
                        <div><Link to={`/subjects/${word.subject_id}/words/${word.id}`}>{word.spelling}</Link></div>
                                       
                </div>

            )}

        </div>
    )
}


export default connect(null, { deleteWord })(WordList);
