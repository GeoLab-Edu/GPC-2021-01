import { Link } from 'react-router-dom';
import logo from '../images/GPC_Main_Logo.svg';
import Navigation from './Navigation';
import UserDiv from './UserDiv';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";




export default function Header() {

    return (
        <header className="App-header">
            <Link to='/' className='logoLink'>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <div className='headerRight'>
                <div className='translateDiv'>
                    <button className='languages' onClick={
                        (e) => {
                            i18n.changeLanguage('ka');
                            e.target.style.textDecoration = "underline"
                        }
                    }>ქარ</button>
                    <button className='languages' onClick={
                        (e) => {
                            i18n.changeLanguage('en');
                            e.target.style.textDecoration = "underline"
                        }
                    }>Eng</button>
                </div>
                <div className='headerRightBottom'>
                    <Navigation/>
                    <UserDiv/>
                </div>
            </div>
        </header>
    )
}