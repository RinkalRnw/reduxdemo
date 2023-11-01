import React, { useState, useMemo } from 'react';
import TodoList from './TodoList';


const CallbackMemoComponent = () => {
    const [count,setCount] = useState(0)
    const [item,setItem] = useState(10)
   const calc = useMemo(()=> TodoList,[count])
    return (
        <div>
            <h3>Memo Example</h3>

            <h3>Count is : {count}</h3>
            <button onClick={()=>setCount(count+1)}>Add Count</button>

            <h3>Item value is  is : {item}</h3>
            <button onClick={()=>setItem(item*5)}>Add Item</button>

            <hr />
            {calc}
            {/* <TodoList /> */}
            <hr />
        </div>
    );
}

export default CallbackMemoComponent;
