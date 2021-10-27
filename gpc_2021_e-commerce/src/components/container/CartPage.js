import { Link, Route } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../CartContext";
import BuyButton from "../littleComponents/BuyButton";
import CounterwithValue from "../littleComponents/CounterwithValue";
import RelatedProducts from "../littleComponents/RelatedProducts";
import './../../styles/Cart.css';

export default function CartPage() {

    const {cartProducts, setCartProducts} = useContext(CartContext);

    function handleRemoveProduct(e) {
        const prodID = parseInt(e.target.value);
        setCartProducts(cartProducts.filter((product) => product.id !== prodID))
    }

    const sumProductArray = cartProducts.map((item) => {
        let multiplication;
        if (item.discountedPrice == null ) {
            multiplication = (item.quantity * item.price);
            
        } else {
            multiplication = (item.quantity * item.discountedPrice)
        }
        return multiplication
    })
    const sumProductResult = sumProductArray.reduce((a, b) => a+b,0);

    const savedMoneyArray = cartProducts.map((item) => {
        let savedMoney;
        if (item.discountedPrice > 0) {
            savedMoney = (item.quantity * item.price)-(item.quantity * item.discountedPrice);
            
        } else {
            savedMoney = 0
        }
        return savedMoney
    });
    const savedMoneyResult = savedMoneyArray.reduce((a,b)=> a+b,0)

    return (
        <section className='CartPage'>
            <h4>ფავორიტები</h4>
            <section className='OrderWrap'>
                {
                    cartProducts.length > 0 
                    ?
                    cartProducts.map((product, i) => {
                        return (
                            <div className='productBox' key={i}>
                                <img src={product.img} alt={product.title} style={{width: 300, height: 200}}/>
                                <div className='productDetails'>
                                    <Link to={`/Production/${product.id}`}>
                                        <h3>{product.title}</h3>
                                    </Link>
                                    <span>{product.manufacturer}</span>
                                    <span>{product.amount}</span>
                                </div>
                                <div className='OrderDetails'>
                                    
                                    {product.discountedPrice 
                                    ? 
                                    <>
                                    <span> {product.discountedPrice} </span>
                                    <span>ლარი</span>
                                    <span style={{textDecoration:'line-through'}}>{product.price}</span>
                                    <span style={{textDecoration:'line-through'}}>ლარი</span>
                                    </> 
                                    :
                                    <>
                                    <span>{product.price}</span>
                                    <span>ლარი</span>
                                    </>
                                    }
                                    <span>...{product.quantity}</span>
                                    <CounterwithValue productID={product.id}/>
                                </div>
                                <button value={product.id} onClick={handleRemoveProduct}>წაშლა</button>
                            </div>
                            
                        )
                    })
                    :
                    <p>კალათა ცარიელია</p>
                }
                {
                    cartProducts 
                    ?
                    <div className='OrderSum'>
                        <h4>თქვენი შეკვეთა</h4>
                        <table>
                            <tr>
                                <th>
                                    სულ თანხა
                                </th>
                                    <td>
                                        {sumProductResult}
                                    </td>
                            </tr>
                            <tr>
                                <th>
                                    თქვენ დაზოგეთ
                                </th>
                                <td>
                                    {savedMoneyResult}
                                </td>
                            </tr>
                        </table>
                        <Link to='Purchase'>
                            <BuyButton content='ყიდვა'/>
                        </Link>
                    </div>
                    :
                    null
                }

            </section>
            <RelatedProducts id={cartProducts.id?cartProducts.id:null} />
        </section>
    )
}