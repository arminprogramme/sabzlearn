import React, { Component } from 'react';
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import Footer from './Footer/Footer.jsx'
class SabzLearn extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body />
                <Footer />
            </div>
        );
    }
}

export default SabzLearn;
