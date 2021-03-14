export const fetchSubjects = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/subjects')
        .then(resp => resp.json())
        .then(subjects => dispatch({ type: 'FETCH_SUBJECTS', payload: subjects }))
        // .then(subjects => console.log('fetchSubjects', subjects))
    }
}

export const newSubject = (subjectInput) => {
    return (dispatch) => {
        fetch('http://localhost:3000/subjects', {
            method: 'POST',
            body: JSON.stringify(subjectInput),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(resp => resp.json())
        .then(subjectData => dispatch({ type: 'NEW_SUBJECT', payload: subjectData }))
    }
}

export function deleteSubject(subjectID) {
    return (dispatch) => {
        fetch(`http://localhost:3000/subjects/${subjectID}`,{
            method: 'DELETE',
            body: JSON.stringify(subjectID),
            headers: { 'Content-Type': 'application/json'}    
        })
        .then(resp => resp.json())
        .then(subjectData => dispatch({ type: 'DELETE_SUBJECT', payload: subjectData }))
    }
}



