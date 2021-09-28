import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className='MiniNav AboutUs'>
            <h3 className='MiniNavTitle'>კომპანია</h3>
            <ul className='AboutUsUl'>
                <li className='AboutUsLi'>
                    <Link to='History'>ისტორია</Link>
                </li>
                <li className='AboutUsLi'>
                    <Link to='AchievmentsAndRewards'>მიღწევები და ჯილდოები</Link>
                </li>
                <li className='AboutUsLi'>
                    <Link to='Management'>მართვა და მენეჯმენტი</Link>
                </li>
                <li className='AboutUsLi'>
                    <Link to='OurTeam'>ჩვენი გუნდი</Link>
                </li>
                <li className='AboutUsLi'>
                <Link to='Vacancies'>ვაკანსიები</Link>
                </li>
            </ul>
        </div>
    )
}