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
                    <button className='languages' onClick={() => i18n.changeLanguage('ka')}>ქარ</button>
                    <button className='languages' onClick={() => i18n.changeLanguage('en')}>eng</button>
                </div>
                <div className='headerRightBottom'>
                    <Navigation/>
                    <UserDiv/>
                </div>
            </div>
        </header>
    )
}