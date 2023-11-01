import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course'
class NewCourse extends Component {

    constructor(props){
        super(props)

        this.state = {
            newCourses : [
                {id : 1 , image : 'image/product/' , title : '' , cat1 : '' , cat2 : '' , desc : '' , teacher : '' , time : '' , price : 5 , users : 55 ,},
                {id : 2 , image : 'image/product/' , title : '' , cat1 : '' , cat2 : '' , desc : '' , teacher : '' , time : '' , price : 5 , users : 55 ,},
                {id : 3 , image : 'image/product/' , title : '' , cat1 : '' , cat2 : '' , desc : '' , teacher : '' , time : '' , price : 5 , users : 55 ,},
                {id : 4 , image : 'image/product/' , title : '' , cat1 : '' , cat2 : '' , desc : '' , teacher : '' , time : '' , price : 5 , users : 55 ,},
            ]
        }
    }


    render() {
        return (
            <div className='body-item'>
                <Title titleSubject="جدیدترین دوره ها" titleText="یادگیری رشد و توسعه فردی" titleColor="#2ed573"/>

                <div className="grid  md:grid-cols-2 gap-6 xl:grid-cols-4">
                    <Course/>
                </div>
            </div>
        );
    }
}

export default NewCourse;
