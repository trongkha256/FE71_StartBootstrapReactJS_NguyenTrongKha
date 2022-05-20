import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import PageContent from './PageContent';
import Footer from './Footer';
//css
import './Home.moudle.css'
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <PageContent />
                <Footer />
            </div>
        );
    }
}

export default Home;