import React from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../actions/subjectActions.js';


function SubjectList(props) {
    return (
        <div>
            SubjectList<br></br>
            { props.subjects.length ? props.subjects.map(subject => 
                <li key={subject.id}>
                    <button onClick={ () => props.deleteSubject(subject.id)}>delete {subject.name}</button>

                    {subject.name}                  
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
