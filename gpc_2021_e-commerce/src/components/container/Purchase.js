import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import Addresses from "../littleComponents/Addresses";
import BuyButton from "../littleComponents/BuyButton";
import RelatedProducts from "../littleComponents/RelatedProducts";
import CounterwithValue from './../littleComponents/CounterwithValue';
import './../../styles/Purchase.css';
import deleteBtn from './../../images/deleteBtn.svg';
import { useRef } from "react/cjs/react.development";


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

    function BoughtSuccessfully() {
        popUp.current.style.display = 'flex'
    }
    const popUp = useRef();
    
    if (cartProducts) {
        return (
            <section className='PurchasePage'>
                <div className='PurchaseProductSection'>
                    <Addresses/>
                    <section className='OrderPreview'>
                        <h3 className='OrderPreviewTitle'>თქვენი შეკვეთა</h3>

                    {
                        cartProducts.length > 0 
                        ?
                        cartProducts.map((product, i) => {
                            return (
                                <div className='productBox' key={i}>
                                    <img src={product.img} alt={product.title}/>
                                    <div className='productDetails'>
                                        <div className='TitlePriceWrap'>
                                            <Link to={`/Production/${product.id}`}>
                                                <h3 className='ProductTitle'>{product.title}</h3>
                                            </Link>
                                            {product.discountedPrice 
                                            ? 
                                            <div className='ProductPrice'>
                                                <span> {product.discountedPrice} ლარი</span>
                                                <span>{product.price} ლარი</span>
                                            </div> 
                                            :
                                            <>
                                            <span>{product.price} ლარი</span>
                                            </>
                                            }                                            
                                        </div>
                                        <span>{product.manufacturer}</span>
                                        <CounterwithValue productID={product.id}/>
                                    </div>
                                    <div className='DeleteBtn'>
                                        <button value={product.id} onClick={handleRemoveProduct}>
                                            {/* წაშლა */}
                                        </button>
                                        <img src={deleteBtn}/>
                                    </div>
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
                        <BuyButton content='ყიდვა' onClick={BoughtSuccessfully}/>
                        <div className='PopUp' ref={popUp} onClick={(e)=> e.target.style.display = 'none'}>
                            <div className='PopUpContent'>
                                <h3>გილოცავთ!</h3>
                                <p>
                                    თქვენ წარმატებით განახორციელეთ შესყიდვა
                                </p>                                
                            </div>

                        </div>
                    </section>
                </div>
                <RelatedProducts id={cartProducts.id?cartProducts.id:null}/>
            </section>
        )        
    }

}