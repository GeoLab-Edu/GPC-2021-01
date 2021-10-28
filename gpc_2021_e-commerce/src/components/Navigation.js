import { useState } from "react"
import { Link } from "react-router-dom"
import AboutUs from "./miniNavigations/AboutUs"
import Pharmacies from "./miniNavigations/Pharmacies";
import ProductionNav from "./miniNavigations/ProductionNav";
import { useTranslation, initReactI18next } from "react-i18next";


export default function Navigation() {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showProd, setShowProd] =useState(false);

    const {t} = useTranslation();


    return (
        <nav className='headerNav'>
            <ul className='headerUl'>
                <li className='headerLi'
                    onMouseEnter={()=> setShowProd(!showProd)}
                    onMouseLeave={()=> setShowProd(!showProd)}
                >
                    <Link to='/Production'>
                        {t('products')}
                    </Link>
                    {
                        showProd ? <ProductionNav/> : null
                    }
                                 
                </li> 
                <li className='headerLi' 
                    onMouseEnter={() => setShow(!show)}
                    onMouseLeave={() => setShow(!show)}
                >
                    <span>{t('about')}</span>
                    {show ? 
                        <AboutUs/>
                    : null
                    }
                </li>
                <li className='headerLi'
                    onMouseEnter={() => setVisible(!visible)}
                    onMouseLeave={() => setVisible(!visible)}
                >
                    <span>{t('pharmacies')}</span>
                    {visible ?
                        <Pharmacies/>
                    : null                    
                    }

                </li>
            </ul>
        </nav>
    )
}