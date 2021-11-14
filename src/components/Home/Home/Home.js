import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Vehicles></Vehicles>
            {/* <AboutCompany></AboutCompany> */}
            <Contacts/>
            <Testimonials/>
            <Footer></Footer>
        </div>
    );
};

export default Home;