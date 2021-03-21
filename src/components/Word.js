import React from 'react';
import { connect } from 'react-redux';


function Word(props) {


    return (
        <div>

            WORD
        </div>
    )
}


let mapStateToProps = (state) => {
    return { subjects: state.subjects }
}


export default connect(mapStateToProps)(Word);
