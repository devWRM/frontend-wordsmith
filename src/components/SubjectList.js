import React from 'react';

import { connect } from 'react-redux';

function SubjectList(props) {
    return (
        <div>
            SubjectList<br></br>
            { props.subjects.length ? props.subjects.map(subject => 
                <li>{subject.name}</li>         
            )
             : <p>Add a subject to begin.</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { subjects: state.subjects }
}

export default connect(mapStateToProps)(SubjectList);
