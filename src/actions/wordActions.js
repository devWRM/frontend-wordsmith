import { API_ROOT } from '../services/apiRoot'


export const newWord = (wordInput, subjectId) => {
// debugger;
    return (dispatch) => {
        fetch(`${API_ROOT}/subjects/${subjectId}/words`, {
            method: 'POST',
            body: JSON.stringify(wordInput),
            headers: { 'Content-Type': 'application/json' }        
        })
        .then(resp => resp.json())
        .then(subjectData => dispatch({ type: 'NEW_WORD', payload: subjectData}))
    }
}


export const deleteWord = (wordId, subjectId) => {
    return (dispatch) => {
        fetch(`${API_ROOT}/subjects/${subjectId}/words/${wordId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(subjectData => dispatch({ type: 'DELETE_WORD', payload: subjectData}))
    }
}



