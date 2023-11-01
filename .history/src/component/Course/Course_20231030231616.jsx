import React, { Component } from 'react';
import './Course.css'
class Course extends Component {
    render() {
        return (
            <div className='text-right py-10'>
                
<div class="max-w-sm bg-white border border-gray-200 main-card shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="images/product/sabz-next-768x432.png" alt="" />
    </a>
    <div class="p-5">
        <div className="categories flex justify-end">
            <div className="cat-1-product mx-2">فرانت اند</div>
            <div className="cat-2-product ">بک اند</div>
        </div>
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next.js دوره متخصص </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های…</p>
        <div className="flex justify-between more-detail-product">
            <div className="comment flex items-center text-right text-yellow-300">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span>5.0</span>
            </div>
            <div className="teacher text-gray-500">
            <span className='px-2'>محمد امین سعیدی راد</span>
            <i className="fa fa-user"></i>
            </div>
        </div>
        <dib className="separator"></dib>
        <div className="flex justify-between">
                <div className="price-product" lang='fa'>1,500,000</div>
                <div className="users-product flex items-center text-white">
                    <span className='px-2'>52</span>
                    <i className="fa fa-user"></i>
                </div>
            </div>
    </div>
</div>

            </div>
        );
    }
}

export default Course;
