import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course'
class NewCourse extends Component {

    constructor(props){
        super(props)

        this.state = {
            newCourses : [
                {id : 1 , image : 'image/product/' , title : 'MERN Stack دوره حرفه ای' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , desc : 'کلمه MERN مخفف 4 تکنولوژی Mongo , Express , React , Node بوده و بین استک های جاوا اسکریپت محبوب…' , teacher : 'محمدامین سعیدی راد' , time : '' , price : 5 , users : 55 ,},
                {id : 2 , image : 'image/product/' , title : 'git , github آموزش' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , desc : 'گیت یه Version Controller هست که نسخه های مختلف پروژه هامون رو مدیریت و نگهداری میکنن. گیت یکی از پراستفاده…' , teacher : 'محمدامین سعیدی راد' , time : '' , price : 5 , users : 55 ,},
                {id : 3 , image : 'image/product/PWA-min-1-768x432.jpg' , title : 'PWA  آموزش پروژه محور' , cat1 : 'فرانت اند' , cat2 : '' , desc : 'کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم بهمون اجازه میده وب‌سایتی که توسعه…' , teacher : 'محمدامین سعیدی راد' , time : '' , price : 5 , users : 55 ,},
                {id : 4 , image : 'image/product/' , title : 'Redux آموزش تخصصی ' , cat1 : 'فرانت اند' , cat2 : '' , desc : 'ریداکس یه کتابخونه پراستفاده واسه مدیریت حالت های مختلف یه برنامه جاوا اسکریپتیه که تو بازار کار ری‌اکت یکی از…' , teacher : 'محمدامین سعیدی راد' , time : '' , price : 5 , users : 55 ,},
            ]
        }
    }


    render() {
        return (
            <div className='body-item'>
                <Title titleSubject="جدیدترین دوره ها" titleText="یادگیری رشد و توسعه فردی" titleColor="#2ed573"/>

                <div className="grid  md:grid-cols-2 gap-6 xl:grid-cols-4">
                      {this.state.newCourses.map(item => {
                        return <Course key={item.id} {...item}/>
                      })}
                </div>
                </div>
        );
    }
}

export default NewCourse;
