import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import BuyButton from "../littleComponents/BuyButton";
import RelatedProducts from "../littleComponents/RelatedProducts";
import CounterwithValue from './../littleComponents/CounterwithValue';


export default function Purchase() {
    const {cartProducts, setCartProducts} = useContext(CartContext);

    function handleRemoveProduct(e) {
        const prodID = parseInt(e.target.value);
        setCartProducts(cartProducts.filter((product) => product.id !== prodID))
    }
    const sumProductArray = cartProducts.map((item) => {
        let multiplication;
        if (!item.discountedPrice) {
            multiplication = (item.quantity * item.price);
            
        } else {
            multiplication = (item.quantity * item.discountedPrice)
        }
        return multiplication
    })
    const sumProductResult = sumProductArray.reduce((a, b) => a+b,0);
    
    if (cartProducts) {
        return (
            <section className='PurchasePage'>
                <section className='Delivery'>
                    <form>
                        
                    </form>
                </section>
                <section className='OrderPreview'>
                <h3>თქვენი შეკვეთა</h3>

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
                                    {/* <span>{product.amount}</span> */}
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
                <div className='sumMoney'>
                    <span>სულ თანხა</span>
                    <span>{sumProductResult} ლარი</span>
                </div>
                <BuyButton content='ყიდვა'/>
                </section>
                <RelatedProducts id={cartProducts.id?cartProducts.id:null}/>
                Purchase Page
            </section>
        )        
    }

}