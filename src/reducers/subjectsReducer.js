export const subjectsReducer = (state = [], action) => {

    switch(action.type){

        case 'FETCH_SUBJECTS':
            return action.payload
        case 'NEW_SUBJECT':
            return [...state, action.payload]
        default:
            return state




    }

}