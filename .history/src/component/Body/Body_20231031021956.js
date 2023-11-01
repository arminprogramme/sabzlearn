import React, { Component } from 'react';
import LastCourse from './LastCourse/LastCourse.js'
import Roadmap from './Roadmap/Roadmap.jsx';
import Help from './Help/Help.jsx';
class Body extends Component {
    render() {
        return (
            <div className='max-width'>
                <LastCourse/>
                <Roadmap/>
                <Help/>
            </div>
        );
    }
}

export default Body;
