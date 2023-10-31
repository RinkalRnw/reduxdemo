import React, { useReducer } from 'react';

const list = [
    {
        id:101,
        name:"Rfbg"
    },
    {
        id:102,
        name:"Test"
    }
]

//create reducer
function createReducer(state,action){
    if(action.type === 'add'){
        list.push({
            // age: state.age +1 
            id:103,
            name:"Addd"
        })
        return {
                list:list
            }
    }
}

const ReducerExample = () => {
    const [state, dispatch] = useReducer(createReducer,{list})
    return (
        <div>
            <button type="button" onClick={ ()=>{
                dispatch({ type:'add'})
            }}>Click</button>
            <ul>
            {
                state.list.map((i)=>{
                    return (
                        <div>
                            <li>{i.name} - {i.id}</li>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default ReducerExample;
