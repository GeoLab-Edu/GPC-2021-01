
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

export default function ProfileSection() {

    function onFromSubmit(e) {
        e.preventDefault();
        alert ('Form Submitted');
    }

    return (
        <section className='ProfileSection'>
            <h3 className='ProfileSectionTitle'>
                გამარჯობა, მარიამ!
            </h3>
            <div className='ProfileDiv'>
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
                    <form action='/submit' onSubmit={onFromSubmit} >
                        <label>
                            სახელი
                            <input type='text' id='UserName' />                            
                        </label>

                        <input type='submit' value='დამახსოვრება' />
                    </form>
                </div>
            </div>
        </section>
    )
}