import React, { Component } from 'react';
import ArticleItem from './ArticleItem.jsx';
import Title from '../../Title/Title';
import './Article.css'
class Articles extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            articles : [
                {id : 1 , image : 'images/article/تصویر-شاخص-768x512.jpg' , title : 'محیط های برنامه نویسی پایتون + راهنمایی انتخاب' , desc : 'زخم خورده‌هایی که به خاطر نداشتن محیط برنامه نویسی خوب، زمان زیادی صرف نوشتن یک پروژه ساده کردن کم نیستن! همونایی که بدون تحقیق و بررسی درست صرفاً با محیط‌هایی که مخصوص اون کار' , author : 'ارمیا مزرعه' , date : '1402/08/29' },
                {id : 1 , image : 'images/article/شاخص-فاینال-768x512.jpg' , title : 'رسم نمودار خلاقانه در پایتون – آموزش عملی' , desc : 'تا حالا به این دقت کردید نمی‌شه در پایتون نمودار رسم کرد؟ این مورد به خاطر این هست که رسم نمودار در پایتون به‌صورت پیش‌فرض وجود نداره؛ حالا واقعاً هیچ راهی وجود نداره که بتوان یک چارت را…' , author : 'ارمیا مزرعه' , date : '1402/08/28' },
                {id : 1 , image : 'images/article/android-on-javascript-768x432.png' , title : ' نصب جاوا اسکریپت در اندروید | با 4 روش جدید | 2023' , desc : 'چطوری باید جاوا اسکریپت رو بر روی اندروید نصب کنیم ؟ همونطور که می‌دونید در دنیای برنامه نویسی همانند دنیای واقعی، با زبان‌های بسیاری روبه‌رو هستیم. یکی از محبوب‌ترین زبان‌های و SPA مواجهیم…' , author : 'عرفان جهانشاهلو' , date : '1402/07/01' },
                {id : 1 , image : 'images/article/شاخص-نهایی-768x512.jpg' , title : 'آموزش گام به گام ساخت ویروس با پایتون' , desc : 'ساخت ویروس با پایتون، یکی از مباحث مورد علاقه افرادیه که تو زمینه امنیت و تست نفوذ کار میکنن هست. در واقع شما با ساخت ویروس، درک کاملی از ساختار…' , author : 'ارمیا مزرعه' , date : '1402/07/09' },
            ]
        }
    }

    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>

               <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {this.state.articles.map(item => {
                    return <ArticleItem key={item.id} {...item}/>
                })}
               </div>
            </div>
        );
    }
}

export default Articles;
