///set up data layer
//we need this to track basket
import React,{createContext,useContext,useReducer} from 'react'

//this is data layer

const StateContext=createContext();

//build a provider
export const StateProvider=({reducer,initialState,children})=>(
<StateContext.Provider value={ useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
)

export const useStateValue=()=>useContext(StateContext)