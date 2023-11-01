import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course'
class PopularCourse extends Component {
    render() {
        return (
            <div className='body-item'>
                  <Title titleSubject="محبوبترین دوره ها" titleText="پرمخاطب ترین و بهترین دوره های سبزلرن" titleColor="#2ed573"/>

            </div>
        );
    }
}

export default PopularCourse;
