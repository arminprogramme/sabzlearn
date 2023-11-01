import React, { Component } from 'react';
import HelpItem from './HelpItem.jsx';
import Title from '../../Title/Title'
import './Help.css'
class Help extends Component {

    constructor(props){
        super(props)

        this.state={
            help : [
                {id : 1 , title : 'دوره های اختصاصی' , text : 'با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و منافع مشتری و حفظ شان دیگر همکارانش براش مهمه' , rotate : 'rotate(26deg)' , background : ' conic-gradient(brown 20.00%, red 80.47%)'},
                {id : 2 , title : 'اجازه تدریس' , text : 'به هر مدرسی رو نمیده و فقط فقط با مدرسای سینیور و مید لول وارد همکاری میشه چون کیفیت براش مهمه' , rotate : 'rotate(96deg)' , background : ' conic-gradient(brown 20.00%, red 80.47%)'},
                {id : 3 , title : 'دوره های پولی و رایگان' , text : 'براش مهم نیست. به مدرسینش بهترین مزایا و دستمزد رو میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده' , rotate : 'rotate(126deg)' , background : ' conic-gradient(brown 20.00%, red 80.47%)'},
                {id : 4 , title : 'اولویت بندی به ترتیب منافع' , text : 'در سبزلرن اولویت اول با مدرس هست چون اون قراره دل بسوزونه. اولویت دوم با کاربره چون باید کمکش کرد و درنهایت اولویت آخر با سبزلرنه' , rotate : 'rotate(226deg)' , background : ' conic-gradient(brown 20.00%, red 80.47%)'},
            ]
        }
    }

    render() {
        return (
            <div className='body-item'>
                <Title titleSubject="ما چه کمکی میتوانیم بهتون بکنیم" titleText="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی
						خصوصی هست" titleColor="#4E81FB"/>


                 <div className='grid gap-5 lg:grid-cols-2 text-right'>
                    {this.state.help.map(item => {
                        return <HelpItem key={item.id} {...item}/>
                    })}
                    </div>           
            </div>
        );
    }
}

export default Help;
