const intialState = {
    lenguage: ""
}



export default function rootReducer(state = intialState, action) {
    switch (action.type) {
        case 'ES_es':
            return{
                ...state,
                lenguage: action.payload
            }
        case 'ENG_eng':
            return{
                ...state,
                lenguage: action.payload

            }
            default:
                return state
    }
}