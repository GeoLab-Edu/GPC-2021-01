import { useReducer, useContext} from "react";
import CartContext from './../../CartContext';



export default function Counter({productID}) {

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

    const {cartProducts, setCartProducts} = useContext(CartContext);

    const newCartProducts = [...cartProducts];
    newCartProducts.forEach(product => {
        if (product.id === productID) {
            product.quantity = state.count
        }
    });


    return (
        <form
        onSubmit={(e) => e.preventDefault()}
        className='counter'
    >
        <button onClick= {decrement}>-</button>
        <span >{state.count}</span>
        <button onClick={increment}>+</button>
    </form>
    )
}