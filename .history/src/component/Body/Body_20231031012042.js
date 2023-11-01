import React, { Component } from 'react';
import LastCourse from './LastCourse.js'
import Roadmap from './Roadmap.jsx';
class Body extends Component {
    render() {
        return (
            <div className='max-width'>
                <LastCourse/>
                <Roadmap/>
            </div>
        );
    }
}

export default Body;
