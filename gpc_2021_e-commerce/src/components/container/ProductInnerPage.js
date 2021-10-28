import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react/cjs/react.development";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../../styles/ProductInnerPage.css';
import { Link } from "react-router-dom";
import BuyButton from "../littleComponents/BuyButton";
import Counter from "../littleComponents/Counter";
import RatingStars from "../littleComponents/RatingStars";
import { useContext, useReducer } from "react";
import RelatedProducts from "../littleComponents/RelatedProducts";
import GlobalURL from './../../GlobalURL';
import CartContext, {ProductQuantity} from "../../CartContext";
import { useTranslation, initReactI18next } from "react-i18next";




export default function ProductInnerPage() {

    const {t} = useTranslation();

    let {productId} = useParams();

    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(GlobalURL);
        const itemsData = await data.json();
        setItems(itemsData.Products);
    }

    const productID = parseInt(productId);

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

    const [active, setActive] = useState('annotation');

    function handleClick(e) {
        setActive(e.target.id);
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

    const currentProduct = uniqueItems.filter((product) => product.id === productID)[0];

    function addProductToCart() {
            let productAlreadyAdded;
            if (cartProducts.find(item => item.id === productID) !== undefined) {
                productAlreadyAdded = cartProducts.find(item => item.id === productID);
            } else {
                productAlreadyAdded = false;
            }
            if (productAlreadyAdded !== false) {
                const updatedProducts = cartProducts.map(item => {
                    // if (item.id == productID) {
                    //     item.quantity +=1;
                    // }
                    return item;
                })
                setCartProducts(updatedProducts);
            } else {
                // setCartProducts(newCartProducts);
                setCartProducts([...cartProducts, currentProduct]);

            }         
    };
    

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
                                <div className='DetailsHeading'>
                                    <h2 className='DetailsTitle'>{product.title}</h2>
                                    <div className='ManufacturerPricingWrap'>
                                        <div className='Manufacturer'>
                                            <span>{product.manufacturer}</span>
                                            <span>{product.amount}</span>                                    
                                        </div>
                                        {
                                            product.discountedPrice
                                            ?
                                            <div className='PricingWrap'>
                                                <span className='PreviewPrice'>{product.discountedPrice} {t('l')}</span>
                                                <span className='PreviewOldPrice'>{product.price} {t('l')}</span>
                                            </div>
                                            :
                                            <div className='PricingWrap'>
                                                <span className='PreviewPrice'>{product.price} {t('l')}</span>
                                            </div>
                                        }                                        
                                    </div>


                                    <p className='AnnotationPreview'>{product.annotation}</p>
                                    <div className='PurchaseDetailsWrap'>
                                        <Counter productID={productID}/>
                                        <div className='favourites'>
                                            <FontAwesomeIcon icon={['far','heart']} className='favIcon headerMainIcon' />
                                            <Link to='Favourites'>
                                                {t('fav')}
                                            </Link>
                                        </div>
                                        
                                        <BuyButton content={t('buy')} onClick={addProductToCart}/>
                                    </div>

                                </div>

                                
                                <div className='Review'>
                                    <div className='Review-scores'>
                                        <h4 className='Review-Scores-Title'>შეფასება</h4>
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
                                        <h4 className='Review-Comments-Title'>კომენტარები</h4>
                                        <div className='comments ' ref={comments}>
                                            <p>პროდუქტი შეიცავს ბუნებრივ შემადგენლებს და არის მისაღები ფასის.</p>
                                            <p>რეკომენდირებულია ფასიდან და ხარისხიდან გამომდინარე.</p>
                                            <p>ისე, ძალიან კაი ფასისაა.</p>
                                            <p>პროდუქტი შეიცავს ბუნებრივ შემადგენლებს და არის მისაღები ფასის.</p>
                                            <p>ისე, ძალიან კაი ფასისაა.</p>                                            
                                        </div>
                                        <button className='ShowMoreBtn' onClick={showMore}>მეტი</button>
                                        <form className='customComment' onSubmit={(e)=> e.preventDefault()}>
                                            <button className='customCommentBtn' type='button' onClick={handleComment}>დატოვე კომენტარი</button>
                                            <input type='text' className='commentArea' ref={commentInput} placeholder='დატოვე კომენტარი'/>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className='TextDescription'>
                                <ul className='TextDescriptionUl' >
                                    {
                                        textDescriptionLi.map((item) => {
                                            return (
                                                <li 
                                                    id={item.id} 
                                                    key={item.id} 
                                                    className={'NewProductsDiv ' + active}
                                                    onClick={(e)=> {
                                                        handleClick(e);
                                                        dispatch({type: e.target.id})
                                                    }}
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