import React, { Component } from 'react';
import LastCourse from './LastCourse/LastCourse.js'
import Roadmap from './Roadmap/Roadmap.jsx';
import Help from './Help/Help.jsx';
import NewCourse from './NewCourse/NewCourse.jsx';
class Body extends Component {
    render() {
        return (
            <div className='max-width'>
                <LastCourse/>
                <Roadmap/>
                <Help/>
                <NewCourse/>
            </div>
        );
    }
}

export default Body;
