export const initailState={
search:[],
searchStudent:[],
layout:[],
totalUser:[],
totalOrder:[],
totalBook:[]
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
        
        case 'TOTALUSER':
        //logic for adding
        return {...state,totalUser:action.item}

        case 'TOTALBOOK':
            //logic for adding
            return {...state,totalBook:action.item}

            case 'TOTALORDER':
                //logic for adding
                return {...state,totalOrder:action.item}
                default:
                return state
}

}


export default Reducer
