
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from './Routes.js';

import { fetchSubjects} from '../actions/subjectActions.js';
// import SubjectForm from './SubjectForm.js';
// import SubjectList from './SubjectList.js';

class SubjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchSubjects()
    }

    

    render() {

        return(
            <div>
                This is the SubjectsContainer

                <Routes />

                {/* <SubjectForm />
                <SubjectList /> */}


            </div>
        )


    }

}

export default connect(null, { fetchSubjects })(SubjectsContainer);




