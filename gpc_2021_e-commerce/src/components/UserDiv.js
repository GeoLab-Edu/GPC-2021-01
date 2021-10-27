import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "./littleComponents/Button";
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import GlobalURL from '../GlobalURL';
import '../styles/header.css';

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
    var x;
    var y;
    if ((quantityNumber !== null) && (priceNumber !== null)) {
        x = quantityNumber.textContent;
        y = priceNumber.textContent;
    // } else {
    //     x = 1;
    //     y = 1;
    }

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
                                        <img src={product.img} alt='Product Image' style={{width: 100, height: 20}}/>
                                        <div className='cartProdDetails'>
                                            <h3>{product.title}</h3>
                                            <span 
                                                ref={price.current[i]}
                                            >
                                                {product.price}
                                            </span>
                                            <span
                                                ref={quantity.current[i]}
                                            >
                                                {
                                                    product.quantity 
                                                    ?
                                                    product.quantity
                                                    :
                                                    1
                                                }
                                            </span>
                                            <span >........{ x * y } ლარი</span>
                                        </div>
                                        <button value={product.id} onClick={handleRemoveProduct}>წაშლა</button>
                                    </div>
                                )
                            })
                            :
                            <p>
                                კალათა ცარიელია
                            </p>                         
                        }
                        <Link to='/Cart'> 
                        <button type='button'>კალათის ნახვა</button>
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