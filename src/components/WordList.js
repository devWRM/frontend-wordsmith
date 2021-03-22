import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { deleteWord } from '../actions/wordActions.js';

function WordList(props) {


    let handleDelete = (word) => {
        props.deleteWord(word.id, word.subject_id)
    }

// debugger;

    return (
        <div>
            
            {props.words.map(word =>
                <div key={word.id}>
                    <p>
                        <button onClick={() => handleDelete(word)}>delete</button>
                        
                        <Link to={`/subjects/${word.subject_id}/words/${word.id}`}>{word.spelling}</Link>
                    </p>                   
                </div>

            )}

        </div>
    )
}


export default connect(null, { deleteWord })(WordList);
