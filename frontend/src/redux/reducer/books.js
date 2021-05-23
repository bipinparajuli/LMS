import {GET_BOOKS,REMOVE_BOOKS,SET_BOOKS,UPDATE_BOOKS} from '../action/action.type'

const initialState = [];

export default (state=initialState,action) => {

    switch(action.type)

    {
        case SET_BOOKS:
            return [...state,action.payload]
        
            case GET_BOOKS:
                return [...state,action.payload]
        
                case UPDATE_BOOKS:
                    return [...state,action.payload]
                    
                    case REMOVE_BOOKS:
                        return [...state,action.payload]
    
                default:
                return state
    }
    
}