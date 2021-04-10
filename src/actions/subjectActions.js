import { API_ROOT } from '../services/apiRoot'


export const fetchSubjects = () => {
    return (dispatch) => {
        fetch(`${API_ROOT}/subjects`)
        .then(resp => resp.json())
        .then(subjects => dispatch({ type: 'FETCH_SUBJECTS', payload: subjects }))
        // .then(subjects => console.log('fetchSubjects', subjects))
    }
}

export const newSubject = (subjectInput) => {
    return (dispatch) => {
        fetch(`${API_ROOT}/subjects`, {
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
        fetch(`${API_ROOT}/subjects/${subjectID}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}    
        })
        .then(resp => resp.json())
        .then(subjectData => dispatch({ type: 'DELETE_SUBJECT', payload: subjectData }))
    }
}







