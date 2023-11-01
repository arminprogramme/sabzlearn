import React, { Component } from 'react';
import Header from './Header/Header.js'
import Body from './Body/Body.js'
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
