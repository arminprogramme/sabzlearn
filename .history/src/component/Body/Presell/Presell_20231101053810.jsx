import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course';
class Presell extends Component {

    constructor(props){
        super(props)

        this.state={
            courses : [
                {id : 1 , image : 'images/product/IMAGE-1402-07-30-14_22_45-768x432.jpg' , title : 'CSS مینی پروژه های تخصصی' , desc : 'عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' , teacher : 'حمیدرضا عبادی' , cat1 : 'فرانت اند' , cat2 : '' , time : '00:00' , price : 600000 , users : 55 },
                {id : 1 , image : 'images/product/IMAGE-1402-07-30-14_29_52-768x432.jpg' , title : 'JS برای برنامه نویسان Clean Code' , desc : 'فرق بین یه برنامه‌نویس تازه‌کار و حرفه‌ای نوع دیدگاه و طرز کدنویسیشونه' , teacher : 'محمد امین سعیدی راد' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , time : '13:00' , price : 700000, users : 55 },
                {id : 1 , image : 'images/product/IMAGE-1402-07-30-14_55_58-768x432.jpg' , title : 'JSزیر و بم دپلوی برای برنامه نویسان' , desc : 'تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی داری. تو…' , teacher : 'محمد امین سعیدی راد' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , time : '08:00' , price : 900000 , users : 55 },
                {id : 1 , image : 'images/product/IMAGE-1402-07-30-14_22_45-768x432.jpg' , title : 'CSS مینی پروژه های تخصصی' , desc : 'عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' , teacher : 'حمیدرضا عبادی' , cat1 : 'فرانت اند' , cat2 : '' , time : '00:00' , price : 600000 , users : 55 },
            ]
        }
    }


    render() {
        return (
            <div className='my-9 py-9'>
                <Title titleSubject="دوره های پیش فروش" titleText="دوره هایی که قراره برگزار بشن" titleColor="#2ED573"/>
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {this.state.courses.map(item => {
                        return <Course key={item.id} {...item}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Presell;
