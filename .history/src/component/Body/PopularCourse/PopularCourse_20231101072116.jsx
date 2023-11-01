import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course'
class PopularCourse extends Component {
    constructor(props){
        super(props)

        this.state = {
            courses : [
                {id: 1 , image: 'images/product/Com_JAVASCRIPT-768x432.png' , fake : 4000000 , price : 0 , title : 'آموزش جاوااسکریپت ازمقدماتی تا پیشرفته', teacher : 'محمدامین سعیدی راد' ,users : 12362 , time:''},
                {id: 2 , image: 'images/product/Com_python-768x432.png' , fake : 6000000 , price : 0 , title : 'آموزش تخصصی پایتون از مقدماتی تا پیشرفته', teacher : 'رضا دولتی' , users : 1502 , time:''},
                {id: 3 , image: 'images/product/CSS-852x479-1-768x432.png' , fake : 220000 , price : 0 , title : 'CSS3آموزش پروژه محور ', teacher : 'حمیدرضا عبادی' , users : 899 , time:''},
                {id: 4 , image: 'images/product/HTML-852x479-2-1-768x432.png' , fake : 250000 , price : 0 , title : 'HTML5 آموزش پروژه محور', teacher : 'حمیدرضا عبادی' , users : 302 , time:''},
                {id: 5 , image: 'images/product/Com_black_js-768x432.png' , fake : 150000 , price : 0 , title : 'آموزش جاوااسکریپت با گرایش امنیت', teacher : 'قدیر یلمه' , users : 256 ,time:''},
                {id: 6 , image: 'images/product/webinar1-852-1-768x432.png' , fake : 5000000 , price : 0 , title : 'راه اندازی کسب و کار شخصی برای برنامه نویسان', teacher : 'قدیر یلمه' , users : '1200' , time:''},
                {id: 7 , image: 'images/product/csshtml-852-768x432.jpg' , fake : 220000 , price : 0 , title : 'HTML CSS  پروژه های خلاقانه با', teacher : 'مهرشاد براتی' , users : 2369 , time:''},
                {id: 8 , image: 'images/product/Com_css_grid-768x432.png' , fake : 35000 , price : 0 , title : 'CSS Grid اموزش پروژه محور', teacher : 'حمیدرضا عبادی' , users : 2566 , time:''},
            ]
        }
    }
    render() {
        return (
            <div className='body-item'>
                  <Title titleSubject="محبوبترین دوره ها" titleText="پرمخاطب ترین و بهترین دوره های سبزلرن" titleColor="#2ed573"/>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {this.state.courses.map(item => {
                    return <Course key={item.id} {...item}/>
                })}
            </div>
            </div>
        );
    }
}

export default PopularCourse;
