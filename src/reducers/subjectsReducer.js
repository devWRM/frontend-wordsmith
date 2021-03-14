export const subjectsReducer = (state = [], action) => {

    switch(action.type){

        case 'FETCH_SUBJECTS':
            return action.payload
        case 'NEW_SUBJECT':
            return [...state, action.payload]
        case 'DELETE_SUBJECT':
            // console.log(state) 
            let stateLess = state.filter(subject => subject.id !== action.payload.id)
            return [...stateLess]
        default:
            return state




    }

}