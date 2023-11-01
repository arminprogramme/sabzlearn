import React, { Component } from 'react';
import Title from '../../Title/Title'
class NewCourse extends Component {
    render() {
        return (
            <div className='body-item'>
                <Title titleSubject="جدیدترین دوره ها" titleText="یادگیری رشد و توسعه فردی" titleColor="#2ed573"/>

                <div className="grid  md:grid-cols-2 gap-6 xl:grid-cols-4"></div>
            </div>
        );
    }
}

export default NewCourse;
