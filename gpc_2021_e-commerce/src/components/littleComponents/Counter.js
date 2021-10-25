import { useReducer } from "react";

export default function Counter({quantity}) {

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                if (state.count < 1) {
                    return state
                } else {
                    return {count: state.count - 1}  
                }
                
            default:
                return state;
        }
    }

    function increment() {
        dispatch({type: 'increment'})
    }
    function decrement() {
        dispatch({type: 'decrement'})
    }

    const [state, dispatch] = useReducer(reducer, {count: 1});

    return (
        <form
        onSubmit={(e) => e.preventDefault()}
        className='counter'
    >
        <button onClick= {decrement}>-</button>
        <span ref={quantity} >{state.count}</span>
        <button onClick={increment}>+</button>
    </form>
    )
}