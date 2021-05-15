import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Word(props) {
// word ID "3" =>>  props.match.params.id
//          3  =>>  props.subjects[1].words[0].id

// debugger;

    let selectedWord;

     for(var i=0; i<props.subjects.length; i++) {
            if(props.subjects[i].words) {
                for(var x=0; x<props.subjects[i].words.length; x++) {
                    if(props.subjects[i].words[x].id == props.match.params.id) {
                        selectedWord = [props.subjects[i], props.subjects[i].words[x]]
                    }
                }
            }
    }
    
    
    return (
        <div>
            <h3>SUBJECT: <Link to={`/subjects/${selectedWord[0].id}`}>{selectedWord[0].name}</Link></h3>

            Word: {selectedWord[1].spelling}<br></br>
            POS: {selectedWord[1].pos}<br></br>
            Definition: {selectedWord[1].definition}<br></br>
            Sentences: {selectedWord[1].sentences}           
        </div>
    )
}


let mapStateToProps = (state) => {
    return { subjects: state.subjects }
}


export default connect(mapStateToProps)(Word);
