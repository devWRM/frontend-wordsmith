

export const newWord = (wordInput, subjectId) => {
// debugger;
    return (dispatch) => {
        fetch(`http://localhost:3000/subjects/${subjectId}/words`, {
            method: 'POST',
            body: JSON.stringify(wordInput),
            headers: { 'Content-Type': 'application/json' }        
        })
        .then(resp => resp.json())
        .then(subjectData => dispatch({ type: 'NEW_WORD', payload: subjectData}))
    }
}