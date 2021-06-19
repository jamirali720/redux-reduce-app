import React, { useReducer } from 'react';
const initialState = {count: 0}
const reducer= (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
            default:
                 return state
    }
}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div style={{border: '1px solid red', margin: '20px'}}>
            <h1>this is separate component</h1>
            <h1>Reducer count {state.count}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>decrement</button>
        </div>
    );
};

export default ReducerCount;