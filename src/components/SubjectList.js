import React from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../actions/subjectActions.js';
import WordsContainer from './WordsContainer.js';


function SubjectList(props) {
// NOTE props.subject[0] =>> {id: 1, name: "bank", words: Array(2)}
// NOTE props.subject[0].words =>> 
//=>> [{id:1, spelling: "deposit", ...}, {id:2, spelling: "withdraw", ...}]

// debugger;

    return (
        <div>
            SubjectList<br></br>
            { props.subjects.length ? props.subjects.map(subject => 
                <li key={subject.id}>
                    <button onClick={ () => props.deleteSubject(subject.id)}>delete {subject.name}</button>

                    {subject.name}  

                    <WordsContainer words={subject.words}/>

                </li>         
            )
             : <p>Add a subject to begin.</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { subjects: state.subjects }
}

const mapDispatchToProps = dispatch => {
    return {
            deleteSubject: subjectID => dispatch(deleteSubject(subjectID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
