import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <UserProfile /> */}
                <Footer />
            </div>
        );
    }
}

export default Home;