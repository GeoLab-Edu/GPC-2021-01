import { Link } from 'react-router-dom';
import logo from '../images/GPC_Main_Logo.svg';
import Navigation from './Navigation';
import UserDiv from './UserDiv';




export default function Header() {

    return (
        <header className="App-header">
            <Link to='/' className='logoLink'>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <div className='headerRight'>
                <div className='translateDiv'>
                    <span className='languages'>ქარ</span>
                    <span className='languages'>eng</span>
                </div>
                <div className='headerRightBottom'>
                    <Navigation/>
                    <UserDiv/>
                </div>
            </div>
        </header>
    )
}