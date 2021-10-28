import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import LogInContext from '../../LogInContext';
import MyDetails from '../littleComponents/MyDetails';
import MyOrders from './../littleComponents/MyOrders';
import './../../styles/Cabinet.css';
import Addresses from '../littleComponents/Addresses';

export default function ProfileSection() {
    const {logedIn, setLogedIn} = useContext(LogInContext);


    return (
        <section className='ProfileSection'>
            {
                logedIn?
                <>
                <h3 className='ProfileSectionTitle'>
                    გამარჯობა, ლინდა!
                </h3>
                <div className='UserCabinet'>
                    <ul className='ProfileDivMiniSection'>
                        <li>
                            <Link to='/Profile/' exact>
                                <FontAwesomeIcon icon={['far','user']} mask='far' className='userIcon headerMainIcon'/>
                                ჩემი დეტალები
                            </Link>
                        </li>
                        <li>
                            <Link to='/Profile/MyOrders' exact>
                                <FontAwesomeIcon icon={['fas','box-open']} mask='far' className='userIcon headerMainIcon'/>
                                ჩემი შეკვეთები
                            </Link>
                        </li>
                        <li>
                            <Link to='/Profile/Addresses' exact>
                                <FontAwesomeIcon icon={['far','building']} mask='far' className='userIcon headerMainIcon'/>
                                მისამართები
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['far','credit-card']} mask='far' className='userIcon headerMainIcon'/>
                            გადახდის მეთოდები
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas','lock']} mask='far' className='userIcon headerMainIcon'/>
                            ჩემი პაროლი
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas','gift']} mask='far' className='userIcon headerMainIcon'/>
                            ზღარბი ბარათი
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['far','question-circle']} mask='far' className='userIcon headerMainIcon'/>
                            დახმარება
                        </li>
                    </ul>
                    <div className='ProfileDivRight'>
                        <Route path='/Profile' exact component={MyDetails}/>
                        <Route path='/Profile/MyOrders/'  component={MyOrders}/>
                        <Route path='/Profile/Addresses' exact component={Addresses}/>

                    </div>
                </div>
                </>
                :
                <p>
                    გთხოვთ, გაიაროთ ავტორიზაცია...
                </p>   
            }
        </section>
    )
}