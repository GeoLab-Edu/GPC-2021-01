import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "./littleComponents/Button";
import { Link } from 'react-router-dom';

export default function UserDiv() {

    const [visible, setVisible] = useState(true);
    const [showProfile, setShowProfile] = useState(false);


    function LogIn(e) {
        e.preventDefault();
        setVisible(false);
        setShowProfile(true);
    }
    function Logout() {
        setVisible(true)
        setShowProfile(false);
    }


    return (
        <div className='UserDiv'>
            <FontAwesomeIcon icon='shopping-bag' className='headerMainIcon' />
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