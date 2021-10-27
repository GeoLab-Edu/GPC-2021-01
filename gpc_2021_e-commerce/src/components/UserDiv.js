import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "./littleComponents/Button";
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import GlobalURL from '../GlobalURL';
import '../styles/header.css';
import './../styles/MiniCart.css';

export default function UserDiv() {

    const [visible, setVisible] = useState(true);
    const [showProfile, setShowProfile] = useState(false);

    const {cartProducts, setCartProducts} = useContext(CartContext);

    const quantity = useRef([React.createRef()]);
    const [quantityNumber, setQuantityNumber] = useState(null);

    const price = useRef([React.createRef()]);
    const [priceNumber, setPriceNumber] = useState(null);

    useEffect(()=> {
        setQuantityNumber(quantity.current[0].current);
        setPriceNumber(price.current[0].current)
    }, [cartProducts]);

    console.log(cartProducts)

    function handleRemoveProduct(e) {
        const prodID = parseInt(e.target.value);
        setCartProducts(cartProducts.filter((product) => product.id !== prodID))
    }

    const[error, setError]=useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const[prodData, setProdData]=useState([]);
    useEffect(() => {
        fetch(GlobalURL)
        .then(response => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setProdData(result.Products);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    // console.log(error, isLoaded, prodData)

    function LogIn(e) {
        e.preventDefault();
        setVisible(false);
        setShowProfile(true);
    }
    function Logout() {
        setVisible(true);
        setShowProfile(false);
    }


    return (
        <div className='UserDiv'>

                <div className='cartIconWrap'>
                    <Link to='/Cart'>
                        <FontAwesomeIcon icon='shopping-bag' className='headerMainIcon' />
                    </Link>

                    <span className='quantityCart'>{cartProducts.length}</span>
                    <div className='cartDropDown'>
                        {
                            cartProducts.length !== 0
                            ?                        
                            cartProducts.map((product, i) => {
                                return (
                                    <div className='cartProducts' key={i}>
                                        <img src={product.img} alt='Product Image'/>
                                        <div className='cartProdDetails'>
                                            <h3 className='cartProdTitle'>{product.title}</h3>
                                            <div className='PricingWrap'>
                                                <span>
                                                    {product.price} ლარი
                                                </span>
                                                <span>
                                                    {
                                                        product.quantity 
                                                        ?
                                                        product.quantity
                                                        :
                                                        1
                                                    }
                                                </span>
                                                <span className='sumPrice'>
                                                    {
                                                        product.discountedPrice
                                                        ?
                                                        product.discountedPrice * product.quantity
                                                        :
                                                        product.price * product.quantity
                                                    }
                                                    ლარი
                                                </span>
                                            </div>

                                        </div>
                                        <button className='DeleteProdBtn' value={product.id} onClick={handleRemoveProduct}>წაშლა</button>
                                    </div>
                                )
                            })
                            :
                            <p className='EmptyCart'>
                                კალათა ცარიელია
                            </p>                         
                        }
                        <Link to='/Cart'>
                            <Button customClass='VisitCartBtn' type='button' content='კალათის ნახვა'/>
                        </Link>
                    </div>                
                </div>
            

            <FontAwesomeIcon icon={['far','heart']} className='favIcon headerMainIcon' />
            <div className='userRoom'>
                <FontAwesomeIcon icon={['far','user']} mask='far' className='userIcon headerMainIcon'/>
                <button className='loginOpenBtn'>კაბინეტი</button>
                <div className='LogInOut'>
                    {
                        visible ?
                        <form className='logIn' onSubmit={LogIn}>
                            <h3 className='logInTitle'>ავტორიზაცია</h3>
                            <div className='userInputDiv'>
                                <input type='email' name='logInEmail' id='logInEmail' className='userInput' />
                                <FontAwesomeIcon icon={['far','envelope']} className='logInIcons' mask={['fas']}/>
                            </div>
                            <div className='userInputDiv'>
                                <input type='password' name='logInPassword' id='logInPassword' className='userInput' />
                                <FontAwesomeIcon icon='eye' className='logInIcons' />
                            </div>
                            <a className='passwordRecoveryLink' href='/'>პაროლის აღდგენა</a>
                            <div className='logInBtnsDiv'>
                                <Button type='submit' content='შესვლა'/>
                                <Button customClass='registerBtn' type='reset' content='რეგისტრაცია' />                        
                            </div>
                            <Button customClass='fbBtn' content='FB-ით ავტორიზაცია'/>
        
        
                        </form>
                        :null
                    }     
                    {
                        showProfile ?
                        <div className='ProfileDiv'>
                            <ul>
                                <li className='ProfileDivSections'>
                                    <FontAwesomeIcon icon={['far','user']} mask='far' className='userIcon headerMainIcon'/>
                                    <Link to='Profile'>
                                        პროფილი
                                    </Link>
                                </li>
                                <li className='ProfileDivSections'>
                                    <FontAwesomeIcon icon={['fas','box-open']} mask='far' className='userIcon headerMainIcon'/>
                                    შეკვეთები
                                </li>
                                <li className='ProfileDivSections'>
                                    <FontAwesomeIcon icon={['fas','gift']} mask='far' className='userIcon headerMainIcon'/>
                                    ზღარბი ბარათი
                                </li>
                                <li className='ProfileDivSections'>
                                    <FontAwesomeIcon icon={['far','bell']} mask='far' className='userIcon headerMainIcon'/>
                                    შეტყობინებები
                                </li>
                                <li className='ProfileDivSections' onClick={Logout}>
                                    <FontAwesomeIcon icon={['fas','sign-out-alt']} mask='far' className='userIcon headerMainIcon'/>
                                    გამოსვლა
                                </li>
                            </ul>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}