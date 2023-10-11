import React from 'react';
import Header from '../components/Header';
import Destinations from '../pages/Destinations';
import BestValueTrips from '../components/BestValueTrips'
import WhyChooseUs from '../components/WhyChooseUs/index';
import Banner from '../components/Banner/index';
import ArticlesTips from '../components/ArticlesTips/index';
import Footer from '../components/Footer/index';
import './responsive.scss';

function Home(props) {
    return (
        <div className="homepagemaster">
            <Header />
            <Destinations />
            <BestValueTrips />
            <WhyChooseUs />
            <Banner />
            <ArticlesTips />
            <Footer />
        </div>
    );
}

export default Home;