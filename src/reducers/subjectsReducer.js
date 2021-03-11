export const subjectsReducer = (state = [], action) => {

    switch(action.type){

        case 'FETCH_SUBJECTS':
            return action.payload
        default:
            return state




    }

}