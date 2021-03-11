export const fetchSubjects = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/subjects')
        .then(resp => resp.json())
        .then(subjects => dispatch({ type: 'FETCH_SUBJECTS', payload: subjects }))
        // .then(subjects => console.log('fetchSubjects', subjects))
    }
}