import React, { Component } from 'react';
import Course from '../Course/Course.jsx';
import Title from '../Title/Title.jsx';
class LastCourse extends Component {

    constructor(props){
        super(props)

        this.state={
            lastCourses : [
                {id : 1 , image : 'images/product/sabz-next-768x432.png' , title : 'Next.js دوره متخصص ' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 2 , image : 'images/product/Com_react-768x432' , title : 'آموزش ری اکت از 0 تا استخدام در دنیای واقعی [منتورشیپ]' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 3 , image : 'images/product/nodeJs-min-768x432' , title : 'بدون پیشنیاز Node.js آموزش' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 4 , image : 'images/product/Com_django-min-768x432' , title : 'دوره پروژه محور متخصص جنگو' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 5 , image : 'images/product/IMAGE-1402-07-30-14_22_45-768x432' , title : 'HTML+CSSمینی پروژه تخصصی با' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 6 , image : 'images/product/IMAGE-1402-07-30-14_29_52-768x432' , title : 'JS برای برنامه نویسان Clean Code' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 7 , image : 'images/product/IMAGE-1402-07-30-14_55_58-768x432' , title : 'JS زیر و بم دپلوی برای برنامه نویسان' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
                {id : 8 , image : 'images/product/csshtml-852-768x432' , title : 'HTML,CSS پروژه خلاقانه با' , desc : '' , cat1 : '' , cat2 : '' , teacher : '' , time : '' , price : 1 , users : ''},
            ]
        }
    }

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
