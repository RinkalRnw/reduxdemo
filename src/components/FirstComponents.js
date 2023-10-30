import {React,useState,createContext, useContext} from 'react';
//create Context
const userContext = createContext()

const FirstComponents = () => {
    const [user,setUser] = useState({
        "name":"Rinkal",
        "age":25
    })
    return (
        <div>
        {/* value iniatialize & store to provider */}
        <userContext.Provider value={user.name}>
            <h3>First Component Called..{user.name}</h3>
            <SecondComponents />
            
        </userContext.Provider>  
        </div>
    );
}
const SecondComponents = () => {
    return (
        <div>
            <h3>Second Component Called..</h3>
            <ThirdComponents />
        </div>
    )
}
const ThirdComponents = () => {
    // Use Context value  by using useContext() hooks
    const user = useContext(userContext);
    // const userName = useContext(userContext)
    return (
        <div>
            <h3>Third Component Called..{user}</h3>
        </div>
    )
}
export default FirstComponents;
