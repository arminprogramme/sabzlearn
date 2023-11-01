import React, { Component } from 'react';
import './instagram.css'
class Instagram extends Component {
    render() {
        return (
            <div className='text-right flex' dir="rtl">
                <div className="insta-content text-center md:text-right">
                    <h2>پیج اینستاگرام آکادمی سبزلرن</h2>
                    <p>اطلاع رسانی تخفیف ها، آموزش های رایگان و نکات کاربردی و لایو های هفتگی</p>
                </div>
                <div className="insta-button ">
                    <button className='flex justify-start'>
                        <span>دیدن پست ها</span>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Instagram;
