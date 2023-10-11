import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../assets/images/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg';
import Img2 from '../assets/images/bf1202aedf2c5b6a57d379575619a488-700x466.jpg';
import Img3 from '../assets/images/1600x1200-4-700x466.jpg';
import Img4 from '../assets/images/pexels-photo-1-700x466.jpg';
import './index.scss';

function Destinations(props) {
    return (
        <div className='destinations'>
            <div className='heading-title'>
                <h2>Popular destinations</h2>
                <p>World's best tourist destinations</p>
            </div>
            <div className='content-img'>
                <div className='item-img'>
                    <Link to='#'>
                        <img src={Img1} className="img" alt="item" />
                    </Link>
                    <div className='text-content'>
                        <h3>Tokyo</h3>
                    </div>
                </div>
                <div className='item-img img-center'>
                    <Link to='#'>
                        <img src={Img2} className="img " alt="item" />
                    </Link>
                    <div className='text-content'>
                        <h3>Seoul</h3>
                    </div>
                </div>
                <div className='item-img img-center'>
                    <Link to='#'>
                        <img src={Img3} className="img" alt="item" />
                    </Link>
                    <div className='text-content'>
                        <h3>Paris</h3>
                    </div>
                </div>
                <div className='item-img'>
                    <Link to='#'>
                        <img src={Img4} className="img" alt="item" />
                    </Link>
                    <div className='text-content'>
                        <h3>London</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destinations;