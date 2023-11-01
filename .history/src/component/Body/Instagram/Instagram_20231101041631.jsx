import React, { Component } from 'react';

class Instagram extends Component {
    render() {
        return (
            <div className='text-right items-center instagram-item grid md:grid-cols-2' dir="rtl">
                <div className="insta-content text-center md:text-right">
                    <h2>پیج اینستاگرام آکادمی سبزلرن</h2>
                    <p>اطلاع رسانی تخفیف ها، آموزش های رایگان و نکات کاربردی و لایو های هفتگی</p>
                </div>
                <div className="insta-button text-center">
                    <button className='flex items-center'>
                        <span>دیدن پست ها</span>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Instagram;
