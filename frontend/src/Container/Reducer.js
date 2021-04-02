export const initailState={
search:[]
}



function Reducer(state,action) {
    console.log(action)
switch(action.type){
    case 'SEARCH':
        //logic for adding
        return {...state,search:action.item}
        
        
                default:
                return state
}

}


export default Reducer
