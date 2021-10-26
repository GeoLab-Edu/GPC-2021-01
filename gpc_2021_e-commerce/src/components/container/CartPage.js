import { Link, Route } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../CartContext";
import RelatedProducts from "../littleComponents/RelatedProducts";

export default function CartPage() {

    const {cartProducts, setCartProducts} = useContext(CartContext);
    console.log(cartProducts)
    function handleRemoveProduct(e) {
        const prodID = parseInt(e.target.value);
        setCartProducts(cartProducts.filter((product) => product.id !== prodID))
    }

    return (
        <section className='CartPage'>
            <h4>ფავორიტები</h4>
            <section className='CartProductsReady'>
                {
                    cartProducts.length > 0 
                    ?
                    cartProducts.map((product, i) => {
                        return (
                            <div className='productBox' key={i}>
                                <img src={product.img} alt={product.title} style={{width: 300, height: 200}}/>
                                <div className='productDetails'>
                                    <h3>{product.title}</h3>
                                    <span>{product.manufacturer}</span>
                                    <span>{product.amount}</span>
                                    {product.discountedPrice 
                                    ? 
                                    <>
                                    <span>{product.discountedPrice} ლარი</span>
                                    <span>{product.price} ლარი</span>
                                    </> 
                                    :
                                    <span>{product.price} ლარი</span>
                                    }
                                </div>
                                <button value={product.id} onClick={handleRemoveProduct}>წაშლა</button>

                            </div>                            
                        )
                    })
                    :
                    <p>კალათა ცარიელია</p>
                }

            </section>
            <RelatedProducts id={cartProducts.id?cartProducts.id:null} />
        </section>
    )
}