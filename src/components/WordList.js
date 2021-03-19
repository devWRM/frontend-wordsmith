import React from 'react';
import { connect } from 'react-redux';

import { deleteWord } from '../actions/wordActions.js';

function WordList(props) {


    let handleDelete = (word) => {
// debugger;
        props.deleteWord(word.id, word.subject_id)
    }


    return (
        <div>
            WordList Here!

            {props.words.map(word =>
                <div key={word.id}>
                    <p><button onClick={() => handleDelete(word)}>delete</button> {word.spelling}</p>                   
                </div>

            )}

        </div>
    )
}


export default connect(null, { deleteWord })(WordList);
