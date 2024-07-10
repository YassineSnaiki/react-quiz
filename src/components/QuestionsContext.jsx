import React, { createContext, useContext, useReducer } from 'react'


const context = createContext();

function reducer(state,action){
    switch(action.type) {
        case "start" : return {...state,started : true}
        case "next" : return {...state,questionNum:state.questionNum+1}
        case "finished" : return {...state,finished : true} 
        default : return state;
    }
}

const initialState = {
    started : false,
    finished : false,
    points : 0,
    questionNum : 0,
}

export default function QuestionsProvider({children}) {
    const [{started,finished,points,questionNum},dispatch]= useReducer(reducer,initialState);
  return (
    <context.Provider
    value={{started,finished,points,questionNum,dispatch}}
    >
     {children}
    </context.Provider>
  )
}

export  function useQuestion(){
    const question = useContext(context);
    if(!question) throw new Error("context used outside the provider");
    return question
}