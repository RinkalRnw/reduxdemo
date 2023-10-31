import React,{ useReducer } from 'react';

function reducer(state,action){
    if(action.type === "add"){
        return {
            age : state.age+1
        }
    }
}

const ReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, {age:25});
    return (
        <div>
            <button onClick={()=>{
                dispatch({type:"add"})
            }}>Click</button>
            <p>Hello...!!!{state.age}</p>
        </div>
    );
}

export default ReducerComponent;
