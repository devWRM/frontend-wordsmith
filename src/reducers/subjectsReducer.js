
export const subjectsReducer = (state = [], action) => {

    switch(action.type){

        case 'FETCH_SUBJECTS':
            return action.payload
        case 'NEW_SUBJECT':
            return [...state, action.payload]
        case 'DELETE_SUBJECT':
            // console.log(state) 
            let subjectLess = state.filter(subject => subject.id !== action.payload.id)
            return [...subjectLess]
        case 'NEW_WORD':
    // debugger;
            let subjectsUpdatedWord = state.map(subject =>
                    subject.id === action.payload.id ? action.payload : subject
                )
            return subjectsUpdatedWord
        case 'DELETE_WORD':
            let subjectsLessWord = state.map(subject =>
                    subject.id === action.payload.id ? action.payload : subject
                )
            return subjectsLessWord
        default:
            return state




    }

}