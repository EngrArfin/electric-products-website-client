import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductCard from '../Product/ProductCard/ProductCard';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <ProductCard></ProductCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;