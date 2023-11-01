import React, { Component } from 'react';
import ArticleItem from './ArticleItem.jsx';
import Title from '../../Title/Title';
import './Article.css'
class Articles extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            articles : [
                {id : 1 , image : 'images/article/' , title : 'محیط های برنامه نویسی پایتون + راهنمایی انتخاب' , desc : 'زخم خورده‌هایی که به خاطر نداشتن محیط برنامه نویسی خوب، زمان زیادی صرف نوشتن یک پروژه ساده کردن کم نیستن! همونایی که بدون تحقیق و بررسی درست صرفاً با محیط‌هایی که مخصوص اون کار' , author : 'ارمیا مزرعه' , date : '' },
                {id : 1 , image : 'images/article/' , title : 'رسم نمودار در پایتون – آموزش عملی' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
                {id : 1 , image : 'images/article/' , title : ' نصب جاوا اسکریپت در اندروید | با 4 روش جدید | 2023' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
                {id : 1 , image : 'images/article/' , title : 'آموزش گام به گام ساخت ویروس با پایتون' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
            ]
        }
    }

    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>

               <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {this.state.articles.map(item => {
                    return <ArticleItem/>
                })}
               </div>
            </div>
        );
    }
}

export default Articles;
