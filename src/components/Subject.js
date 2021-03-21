import React from 'react';
import { connect } from 'react-redux';

import WordsContainer from './WordsContainer.js';


function Subject(props) {
    const selectedSubject = props.subjects.find(subject =>
              subject.id ==  props.match.params.id
    )
// debugger;

    return (
        <div>
            Subject name: { selectedSubject.name }
            <WordsContainer subject={selectedSubject}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return { subjects: state.subjects }
}

export default connect(mapStateToProps)(Subject);
