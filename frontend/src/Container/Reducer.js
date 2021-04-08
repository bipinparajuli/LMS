export const initailState={
search:[],
searchStudent:[],
layout:[]
}



function Reducer(state,action) {
    console.log(action)
switch(action.type){
    case 'SEARCH':
        //logic for adding
        return {...state,search:action.item}
        case 'SEARCHSTUDENT':
        //logic for adding
        return {...state,searchStudent:action.item}
        
        case 'LAYOUT':
        //logic for adding
        return {...state,layout:action.item}
        
                default:
                return state
}

}


export default Reducer
