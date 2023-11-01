import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course'
class NewCourse extends Component {

    constructor(props){
        super(props)

        this.state = {
            newCourses : [
                {id : 1 , image : 'images/product/MernStack2-min-768x432.jpg' , title : 'MERN Stack دوره حرفه ای' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , desc : 'کلمه MERN مخفف 4 تکنولوژی Mongo , Express , React , Node بوده و بین استک های جاوا اسکریپت محبوب…' , teacher : 'محمدامین سعیدی راد' , time : '03:06' , price : 1245000 , users : 99 ,},
                {id : 2 , image : 'images/product/TypeScript-min-768x432.jpg' , title : 'TypeScript آموزش' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , desc : 'تایپ اسکریپت یه زبون برنامه نویسیه که توسط مایکروسافت ارائه شده و یسری قابلیت و فیچر های جدید رو با…' , teacher : 'محمدامین سعیدی راد' , time : '14:02' , price : 2399000 , users : 126 ,},
                {id : 3 , image : 'images/product/PWA-min-1-768x432.jpg' , title : 'PWA  آموزش پروژه محور' , cat1 : 'فرانت اند' , cat2 : '' , desc : 'کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم بهمون اجازه میده وب‌سایتی که توسعه…' , teacher : 'محمدامین سعیدی راد' , time : '08:19' , price : 855000 , users : 255 ,},
                {id : 4 , image : 'images/product/sabz-redux-768x432.png' , title : 'Redux آموزش تخصصی ' , cat1 : 'فرانت اند' , cat2 : '' , desc : 'ریداکس یه کتابخونه پراستفاده واسه مدیریت حالت های مختلف یه برنامه جاوا اسکریپتیه که تو بازار کار ری‌اکت یکی از…' , teacher : 'محمدامین سعیدی راد' , time : '12:04' , price : 1400000 , users : 925 ,},
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
