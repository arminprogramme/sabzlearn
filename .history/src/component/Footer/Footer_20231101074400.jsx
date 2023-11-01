import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className='text-right'>
                <div className="separator"></div>
<footer class="bg-transparent">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">شبکه های اجتماعی</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 flex justify-end items-center">
                    <a href="#" class="font-bold  px-2 text-lg"></a>
                    <i className="fa fa-telegram text-blue-500 text-xl"></i>
                </li>
                <li class="mb-4 flex justify-end items-center">
                    <a href="#" class="font-bold  px-2 text-lg">@sabzlearn</a>
                    <i className="fa fa-instagram  text-xl"></i>
                </li>
               
               
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">لینک های مفید</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">آموزش جاوااسکریپت</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">آموزش پایتون</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">آموزش ریکت</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">آموزش جنگو</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">دسترسی سریع</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">قوانین و مقررات</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ارسال تیکت</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">همه دوره ها</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  text-white">درباره ما</h2>
            <p className=''>
            سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
            </p>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="#">Sabzlearn</a>. All Rights Reserved.
        </span>
        <p>ساخته شده با ❤ توسط آرمین</p>
      </div>
    </div>
</footer>

            </div>
        );
    }
}

export default Footer;
