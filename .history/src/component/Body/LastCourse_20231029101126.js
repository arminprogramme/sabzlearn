import React, { Component } from 'react';
import Course from '../Course/Course.jsx';
import Title from '../Title/Title.jsx';
class LastCourse extends Component {
    render() {
        return (
            <div>
              <Title titleSubject="آخرین دوره ها" titleText="سکوی پرتاب شما به سوی موفقیت"/>
              <Course/>
            </div>
        );
    }
}

export default LastCourse;
