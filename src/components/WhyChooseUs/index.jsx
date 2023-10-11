import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Img8 from '../../assets/images/Map-Marker-300x300.png';
import Img9 from '../../assets/images/Worldwide-Location-300x300.png';
import Img10 from '../../assets/images/Hot-Air-Balloon-300x300.png';


function WhyChooseUs(props) {
    return (
        <div className='WhyChooseUs'>
            <div className="heading-title">
                <h2>Why choose us</h2>
                <p>Here are reasons you should plan trip with us</p>
            </div>
            <div className='WhyChooseUs-content'>
                <div className='img-content'>
                    <div className='item-img'>
                        <Link to='#'>
                            <img src={Img8} className="img" alt="item" />
                        </Link>
                    </div>
                    <div className='item-text'>
                        <div className='heading-h4'>
                            <h4>Handpicked Hotels</h4>
                        </div>
                        <div className='item-content'>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                    </div>
                </div>
                <div className='img-content'>
                    <div className='item-img'>
                        <Link to='#'>
                            <img src={Img9} className="img" alt="item" />
                        </Link>
                    </div>
                    <div className='item-text'>
                        <div className='heading-h4'>
                            <h4>World Class Service</h4>
                        </div>
                        <div className='item-content'>
                            <p>
                                Lorem ipsum dolor sit amet, consect adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                    </div>
                </div>
                <div className='img-content'>
                    <div className='item-img'>
                        <Link to='#'>
                            <img src={Img10} className="img" alt="item" />
                        </Link>
                    </div>
                    <div className='item-text'>
                        <div className='heading-h4'>
                            <h4>Best Price Guarantee</h4>
                        </div>
                        <div className='item-content'>
                            <p>
                                Lorem ipsum dolor sit amet, consect adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;