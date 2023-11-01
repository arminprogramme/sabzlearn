import React, { Component } from 'react';
import Course from '../Course/Course.jsx';
import Title from '../Title/Title.jsx';
class LastCourse extends Component {

    constructor(props){
        super(props)

        this.state={
            lastCourses : [
                {id : 1 , image : 'images/product/sabz-next-768x432.png' , title : 'Next.js دوره متخصص ' , desc : 'نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های…' , cat1 : 'فرانت اند' , cat2 : '' , teacher : 'محمدامین سعیدی راد' , time : '16:55' , price : 1290000 , users : 1147},
                {id : 2 , image : 'images/product/Com_react-768x432' , title : 'آموزش ری اکت از 0 تا استخدام در دنیای واقعی [منتورشیپ]' , desc : 'حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ، این کتابخانه قدرتمند…' , cat1 : 'فرانت اند' , cat2 : '' , teacher : 'محمدامین سعیدی راد' , time : '99:17' , price : 4800000 , users : 1394},
                {id : 3 , image : 'images/product/nodeJs-min-768x432' , title : 'بدون پیشنیاز Node.js آموزش' , desc : 'الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…' , cat1 : 'بک اند' , cat2 : '' , teacher : 'محمدامین سعیدی راد' , time : '55:32' , price : 4350000 , users : 289},
                {id : 4 , image : 'images/product/Com_django-min-768x432' , title : 'دوره پروژه محور متخصص جنگو' , desc : 'از ویژگی های مهم این دوره میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات،…' , cat1 : 'بک اند' , cat2 : 'پایتون' , teacher : 'رضا دولتی' , time : '32:43' , price : 3500000 , users : 308},
                {id : 5 , image : 'images/product/IMAGE-1402-07-30-14_22_45-768x432' , title : 'HTML+CSSمینی پروژه تخصصی با' , desc : 'عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' , cat1 : 'فرانت اند' , cat2 : '' , teacher : 'حمیدرضا عبادی' , time : '00:00' , price : 600000 , users : 105},
                {id : 6 , image : 'images/product/IMAGE-1402-07-30-14_29_52-768x432' , title : 'JS برای برنامه نویسان Clean Code' , desc : 'فرق بین یه برنامه‌نویس تازه‌کار و حرفه‌ای نوع دیدگاه و طرز کدنویسیشونه. برنامه‌نویس حرفه‌ای کدی رو می‌نویسه که تست‌پذیر باشه،…' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , teacher : 'محمدامین سعیدی راد' , time : '00:13' , price : 900000 , users : 80},
                {id : 7 , image : 'images/product/IMAGE-1402-07-30-14_55_58-768x432' , title : 'JS زیر و بم دپلوی برای برنامه نویسان' , desc : 'تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی داری. تو…' , cat1 : 'فرانت اند' , cat2 : 'بک اند' , teacher : 'محمدامین سعیدی راد' , time : '00:08' , price : 700000 , users : 84},
                {id : 8 , image : 'images/product/csshtml-852-768x432' , title : 'HTML,CSS پروژه خلاقانه با' , desc : 'دوره  پروژه خلاقانه با HTML, CSS  با هدف تقویت CSS شما, با آموزش پروژه‌های پیشرفته و سطح بالا , طراحی…' , cat1 : 'فرانت اند' , cat2 : '' , teacher : 'محمدامین سعیدی راد' , time : '19:42' , price : 0 , users : 20551},
            ]
        }
    }

    render() {
        return (
            <div>
              <Title titleSubject="آخرین دوره ها" titleText="سکوی پرتاب شما به سوی موفقیت"/>
             <div className="grid md:grid-cols-2 gap-6 xl:grid-cols-4">
                {this.state.lastCourses.map(course => {
                    return  <Course key={course.id} {...course}/>
                })}
             </div>
            </div>
        );
    }
}

export default LastCourse;
