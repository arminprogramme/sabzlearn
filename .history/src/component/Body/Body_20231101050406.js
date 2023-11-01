import React, { Component } from 'react';
import LastCourse from './LastCourse/LastCourse.js'
import Roadmap from './Roadmap/Roadmap.jsx';
import Help from './Help/Help.jsx';
import NewCourse from './NewCourse/NewCourse.jsx';
import Articles from './Articles/Articles.jsx';
import Instagram from './Instagram/Instagram.jsx';
import Presell from './Presell/Presell.jsx';
class Body extends Component {
    render() {
        return (
            <div className='max-width'>
                <LastCourse/>
                <Roadmap/>
                <Help/>
                <NewCourse/>
                <Articles/>
                <Instagram/>
                <Presell/>
            </div>
        );
    }
}

export default Body;
