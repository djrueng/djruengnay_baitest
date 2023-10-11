import React from 'react';
import './styles.scss';
import Logoft from '../../assets/images/awards.png';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Img14 from '../../assets/images/28760131762_e4a64b20c4_q.jpg';
import Img15 from '../../assets/images/27308262031_a6ebf0572e_q.jpg';
import Img16 from '../../assets/images/27287965356_60355f51d7_q.jpg';
import Img17 from '../../assets/images/27138570412_d25002a5c9_q.jpg';
import Img18 from '../../assets/images/26520497604_1df03a02bc_q.jpg';
import Img19 from '../../assets/images/27012097142_f1511b67bc_q.jpg';
import { PiDeviceMobileLight } from 'react-icons/pi';
import { BiMap, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import { TfiAlarmClock, TfiYoutube } from 'react-icons/tfi';
import { BsPinterest } from 'react-icons/bs';



function Footer(props) {
    return (
        <div className='footer'>
            <footer id='footer'>
                <div className='footer-top'>
                    <div className='ft-col'>
                        <div className='heading-h2'>
                            <h2>Our awards</h2>
                        </div>
                        <div className='ft-text'>
                            <p>London is a megalopolis of people,
                                ideas and frenetic energy.
                                The capital and largest city of the United Kingdom.
                            </p>
                        </div>
                        <div className='logo-ft'>
                            <img src={Logoft} className="Footer-logo" alt="logo footer" />
                        </div>
                    </div>
                    <div className='ft-col'>
                        <div className='heading-h2'>
                            <h2>Contact info</h2>
                        </div>
                        <div className='list-contact'>
                            <p><PiDeviceMobileLight />&nbsp;1-567-124-44227</p>
                            <p><BiMap />&nbsp;184 Main Street East Perl Habour 8007</p>
                            <p><TfiAlarmClock />&nbsp;Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                        </div>
                        <div className='social-media'>
                            <div className='facbook'>
                                <Link to='/'><BiLogoFacebook /></Link>
                            </div>
                            <div className='twitter'>
                                <Link to='/'><BiLogoTwitter /></Link>
                            </div>
                            <div className='youtube'>
                                <Link to='/'><TfiYoutube /></Link>
                            </div>
                            <div className='pinterest'>
                                <Link to='/'><BsPinterest /></Link>
                            </div>
                            <div className='instagram'>
                                <Link to='/'><BiLogoInstagram /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='ft-col'>
                        <div className='heading-h2'>
                            <h2>Recent trips</h2>
                        </div>
                        <div className='img-ft'>
                            <div className='footer-img'>
                                <img src={Img14} className="Ft-img" alt="ft-img" />
                                <img src={Img15} className="Ft-img" alt="ft-img" />
                                <img src={Img16} className="Ft-img" alt="ft-img" />
                            </div>
                            <div className='footer-img'>
                                <img src={Img17} className="Ft-img" alt="ft-img" />
                                <img src={Img18} className="Ft-img" alt="ft-img" />
                                <img src={Img19} className="Ft-img" alt="ft-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-content'>
                        <div className='menu-ft-mb'>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/'>Tours</Link>
                                </li>
                                <li>
                                    <Link to='/'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/'>Purchase Theme</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='copyright'>
                            © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                        </div>
                        <div className='menu-ft'>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/'>Tours</Link>
                                </li>
                                <li>
                                    <Link to='/'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/'>Purchase Theme</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Footer;