import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react/cjs/react.development";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductInnerPage.css';
import { Link } from "react-router-dom";
import BuyButton from "../littleComponents/BuyButton";
import Counter from "../littleComponents/Counter";
import RatingStars from "../littleComponents/RatingStars";
import { useContext, useReducer } from "react";
import RelatedProducts from "../littleComponents/RelatedProducts";
import GlobalURL from './../../GlobalURL';
import CartContext, {ProductQuantity} from "../../CartContext";




export default function ProductInnerPage() {

    let {productId} = useParams();

    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(GlobalURL);
        const itemsData = await data.json();
        console.log(itemsData.Products);
        setItems(itemsData.Products);
    }

    const productID = parseInt(productId);
    // console.log(items[productID-1].img);

    const imgSrc = useRef(null);

    function changeSrc(e) {
        imgSrc.current.src = e.target.src;
    };

    const comments = useRef();
    function showMore(e) {
        comments.current.classList.add('showComments');
        e.target.style.display = 'none';
    }
    const commentInput = useRef();
    function handleComment() {
        commentInput.current.style.display = 'block';
    }

    //* Text Description Area */

    const textDescriptionLi = [
        {id: 'annotation', title: 'ანოტაცია'},
        {id: 'packaging', title:'შემადგენლობა'},
        {id: 'usage', title:'მოხმარების წესი'},
        {id: 'pharmacies', title:'სად შევიძინო'}
    ]

    const [active, setActive] = useState('Annotation');

    function handleClick(e) {
        setActive(e.target.id)
    }

    //* Description Section */

    //* useReducer */

    const initialState = {area: 'annotation'};

    function reducer(state, action) {
        return { area: action.type };
        // default:

    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const textDescr = state.area;

    //* UseContext to add Products to Cart *//

    const {cartProducts, setCartProducts}=useContext(CartContext);
    const uniqueItems = [... items];
    const newCartProducts = [...cartProducts];
    newCartProducts.forEach(product => {
        if (product.id === productID) {
            product.quantity = 1;
        }
    });
    const productsForCart = uniqueItems.filter((product) => product.id === productID)[0];

    function addProductToCart() {
        if (cartProducts.length > 0) {
            for (let i = 0; i < cartProducts.length; i++) {
                const cartProduct = cartProducts[i];
                if (cartProduct.id !== productID) {
                    newCartProducts.push(productsForCart);
                    setCartProducts(newCartProducts);
                }
                
            }          
        } else {
            newCartProducts.push(productsForCart);
            setCartProducts(newCartProducts) 
        }
    };
    console.log(productsForCart, cartProducts)
    

    return (
        <div className='ProductInnerPage'>
            {
                items
                    .filter((item) => item.id === productID )
                    .map(product => (
                        <section key={product.id} className='ProductDetails'>
                            <section className='ImagesPreview'>
                                <div className='Images'>
                                    <img 
                                        src={product.img} 
                                        onClick={changeSrc} 
                                        className='ImagesPreviewImg' 
                                        alt={product.title}
                                    />
                                    <img 
                                        onClick={changeSrc}
                                        src='https://internetowysupermarket.pl/eng_pl_Head-Shoulders-Thick-Strong-Shampoo-2-in-1-360-ml-88983_1.png' 
                                        className='ImagesPreviewImg' 
                                        alt={product.title}
                                    />
                                </div>
                                <div className='ImgPrevSpace'>
                                    {
                                        <img 
                                            src={product.img}
                                            ref={imgSrc}
                                            className='PreviewImg' 
                                            alt={product.title}
                                        />
                                    }
                                    
                                </div>
                            </section>
                            <section className='Details'>
                                <h2 className='DetailsTitle'>{product.title}</h2>
                                <div>
                                    <span>{product.manufacturer}</span>
                                    <span>{product.amount}</span>                                    
                                </div>
                                {
                                    product.discountedPrice
                                    ?
                                    <>
                                        <span className='PreviewPrice'>{product.discountedPrice} ლარი</span>
                                        <span className='PreviewOldPrice'>{product.price} ლარი</span>
                                    </>
                                    :
                                    <span className='PreviewPrice'>{product.price} ლარი</span>
                                }
                                <p className='AnnotationPreview'>{product.annotation}</p>
                                <Counter productID={productID}/>
                                <div className='favourites'>
                                    <FontAwesomeIcon icon={['far','heart']} className='favIcon headerMainIcon' />
                                    <Link to='Favourites'>
                                        ფავორიტები
                                    </Link>
                                </div>
                                
                                <BuyButton content='ყიდვა' onClick={addProductToCart}/>
                                
                                <div className='Review'>
                                    <div className='Review-scores'>
                                        <h4>შეფასება</h4>
                                        <label>
                                            ჯამური ქულა
                                            <RatingStars ratingvalue={product.review} id={productID}/>
                                        </label>
                                        <label>
                                            ხარისხისა და ფასის მიმართება
                                            <RatingStars ratingvalue={product.review} id={productID}/>
                                        </label>
                                        <label>
                                            ეფექტურობა
                                            <RatingStars ratingvalue={product.review} id={productID}/>
                                        </label>
                                        <label>
                                            დიზაინი
                                            <RatingStars ratingvalue={product.review} id={productID}/>
                                        </label>
                                    </div>
                                    <div className='Review-Comments'>
                                        <h4>კომენტარები</h4>
                                        <div className='comments ' ref={comments}>
                                            <p>პროდუქტი შეიცავს ბუნებრივ შემადგენლებს და არის მისაღები ფასის.</p>
                                            <p>რეკომენდირებულია ფასიდან და ხარისხიდან გამომდინარე.</p>
                                            <p>ისე, ძალიან კაი ფასისაა.</p>
                                            <p>პროდუქტი შეიცავს ბუნებრივ შემადგენლებს და არის მისაღები ფასის.</p>
                                            <p>ისე, ძალიან კაი ფასისაა.</p>                                            
                                        </div>
                                        <button onClick={showMore}>მეტი</button>
                                        <form className='customComment' onSubmit={(e)=> e.preventDefault()}>
                                            <button type='button' onClick={handleComment}>დატოვე კომენტარი</button>
                                            <input type='text' className='commentArea' ref={commentInput}/>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className='TextDescription'>
                                <ul>
                                    {
                                        textDescriptionLi.map((item) => {
                                            return (
                                                <li 
                                                    id={item.id} 
                                                    key={item.id} 
                                                    className={'NewProductsDiv ' + active} 
                                                    onClick={handleClick, (e) => dispatch({type: e.target.id})}
                                                >
                                                    {item.title}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className='textDescriptionPreview'>
                                    <p>{product[textDescr]}</p>
                                </div>
                            </section>
                            
                        </section>
                    ))
            }
            <RelatedProducts id={productID}/>
        </div>

    )

}