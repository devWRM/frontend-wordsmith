
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSubjects} from '../actions/subjectActions.js';
import SubjectForm from './SubjectForm.js';
import SubjectList from './SubjectList.js';


class SubjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchSubjects()
    }

    

    render() {

        return(
            <div>
                This is the SubjectsContainer

                <SubjectForm />
                <SubjectList />


            </div>
        )


    }

}

export default connect(null, { fetchSubjects })(SubjectsContainer);




