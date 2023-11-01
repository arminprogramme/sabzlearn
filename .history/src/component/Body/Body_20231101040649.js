import React, { Component } from 'react';
import LastCourse from './LastCourse/LastCourse.js'
import Roadmap from './Roadmap/Roadmap.jsx';
import Help from './Help/Help.jsx';
import NewCourse from './NewCourse/NewCourse.jsx';
import Articles from './Articles/Articles.jsx';
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
            </div>
        );
    }
}

export default Body;
