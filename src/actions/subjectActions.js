export const fetchSubjects = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/subjects')
        .then(resp => resp.json())
        .then(subjects => console.log('fetchSubjects', subjects))
    }
}