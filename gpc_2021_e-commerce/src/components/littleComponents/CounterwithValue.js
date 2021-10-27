import { useReducer, useContext, useEffect} from "react";
import CartContext from '../../CartContext';
import './../../styles/Counter.css';



export default function Counter({productID}) {

    const {cartProducts, setCartProducts} = useContext(CartContext);

    const newCartProducts = [...cartProducts];

    const importedQuantity = cartProducts.filter(item => item.id === productID)[0].quantity;

    const currentProductQuantity = cartProducts.filter(item => item.id === productID)[0].quantity;

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {
                    count: state.count + 1
                }
            case 'decrement':
                if (state.count < 2) {
                    return state
                } else {
                    return {count: state.count - 1}  
                }
                
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {count: importedQuantity});

 
    useEffect(() => {
        newCartProducts.forEach(product => {
            if (product.id === productID) {
                product.quantity = state.count
            }
        });
        setCartProducts(newCartProducts)
    }, [currentProductQuantity, state.count])

    function increment() {
        dispatch({type: 'increment'})
    }
    function decrement() {
        dispatch({type: 'decrement'})
    }






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