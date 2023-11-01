import React, { Component } from 'react';
import './instagram.css'
class Instagram extends Component {
    render() {
        return (
            <div className='text-right lg:flex justify-between items-center instagram-item' dir="rtl">
                <div className="insta-content text-center md:text-right">
                    <h2>پیج اینستاگرام آکادمی سبزلرن</h2>
                    <p>اطلاع رسانی تخفیف ها، آموزش های رایگان و نکات کاربردی و لایو های هفتگی</p>
                </div>
                <div className="insta-button text-center px-2 py-3 ">
                    <button className='flex justify-center text-center sm:w-full  items-center py-2 '>
                        <span className='text-center'>دیدن پست ها</span>
                        <i className="fa px-2 fa-arrow-left"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Instagram;
