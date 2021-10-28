
// let cabinetButtons = [
//     'ჩემი დეტალები',
//     'ჩემი შეკვეთები',
//     'მისამართები',
//     'გადახდის მეთოდები',
//     'ჩემი პაროლი',
//     'ზღარბი ბარათი',
//     'დახმარება'
// ];
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import LogInContext from '../../LogInContext';
import MyDetails from '../littleComponents/MyDetails';
import './../../styles/Cabinet.css';

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
                            <FontAwesomeIcon icon={['far','user']} mask='far' className='userIcon headerMainIcon'/>
                            ჩემი დეტალები
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas','box-open']} mask='far' className='userIcon headerMainIcon'/>
                            ჩემი შეკვეთები
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['far','building']} mask='far' className='userIcon headerMainIcon'/>
                            მისამართები
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
                        <MyDetails/>
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