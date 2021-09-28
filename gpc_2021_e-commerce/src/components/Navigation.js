import { useState } from "react"
import { Link } from "react-router-dom"
import AboutUs from "./miniNavigations/AboutUs"
import Pharmacies from "./miniNavigations/Pharmacies";
import ProductionNav from "./miniNavigations/ProductionNav";


export default function Navigation() {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showProd, setShowProd] =useState(false);


    return (
        <nav className='headerNav'>
            <ul className='headerUl'>
                <li className='headerLi'
                    onMouseEnter={()=> setShowProd(!showProd)}
                    onMouseLeave={()=> setShowProd(!showProd)}
                >
                    <Link to='/Production'>
                        პროდუქცია
                    </Link>
                    {/* <ProductionNav/> */}
                    {
                        showProd ? <ProductionNav/> : null
                    }
                                 
                </li> 
                <li className='headerLi' 
                    onMouseEnter={() => setShow(!show)}
                    onMouseLeave={() => setShow(!show)}
                >
                    <span>ჩვენ შესახებ</span>
                    {show ? 
                        <AboutUs/>
                    : null
                    }
                </li>
                <li className='headerLi'
                    onMouseEnter={() => setVisible(!visible)}
                    onMouseLeave={() => setVisible(!visible)}
                >
                    <span>აფთიაქები</span>
                    {visible ?
                        <Pharmacies/>
                    : null                    
                    }

                </li>
            </ul>
        </nav>
    )
}