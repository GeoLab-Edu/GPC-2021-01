import './../styles/Footer.css';
import logo from './../images/GPC_Main_Logo.svg';
import FB from './../images/fbIcon.png';
import Youtube from './../images/YTIcon.png';
import Instagram from './../images/IGIcon.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className='mainFooter'>
                <section className='SocialSectionWrap'>
                    <img src={logo}/>
                    <div className='SocialIconsWrap'>
                        <p>შემოგვიერთდით</p>
                        <img src={FB}/>
                        <img src={Youtube}/>
                        <img src={Instagram}/>
                    </div>
                </section>
                <section className='FooterProductionNav'>
                    <h3>პროდუქცია</h3>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/Production/Drugs'>
                                    მედიკამენტები
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Housing'>
                                    საყოფაცხოვრებო
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Hygiene'>
                                    ჰიგიენური საშუალებები
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/MakeUp'>
                                    კოსმეტიკა
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Beauty'>
                                    სილამაზის პროდუქცია
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className='FooterBrandsNav'>
                    <h3>ჩვენი ბრენდები</h3>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/Production/Lyerac'>
                                    ლიერაკი
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Nuxe'>
                                    ნუქსი
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Phyto'>
                                    ფიტო
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/RoxDoctor'>
                                    როქსი დოქტორ
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Reno'>
                                    რენო
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/'>
                                    ყველა ბრენდი
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className='FooterCompanyNav'>
                    <h3>კომპანია</h3>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/Production/History'>
                                    ისტორია
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Achievements'>
                                    მიღწევები და ჯილდოები
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Management'>
                                    მართვა და მენეჯმენტი
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/OutTeam'>
                                    ჩვენი გუნდი
                                </Link>
                            </li>
                            <li>
                                <Link to='/Production/Vacancies'>
                                    ვაკანსიები
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className='FooterContact'>
                    <h3>კონტაქტი</h3>
                    <address className='ContactWrap'>
                        <span>ბელიაშვილის 142</span>
                        <a href="tel:+995322940740">(+995 32) 2940740</a>
                        <a href="tel:+995322710707">(+995 32) 2710707</a>
                        <a href="mailto:info@gpc.ge" >info@gpc.ge</a>
                    </address>
                </section>
            </div>          
        </footer>

    )
}