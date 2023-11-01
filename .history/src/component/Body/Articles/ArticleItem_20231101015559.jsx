import React, { Component } from 'react';

class ArticleItem extends Component {
    render() {
        return (
            
<div class=" article-item bg-white border border-gray-200 text-right rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="images/article/شاخص-نهایی-768x512.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">آموزش گام به گام ساخت ویروس با پایتون</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">زخم خورده‌هایی که به خاطر نداشتن محیط برنامه نویسی خوب، زمان زیادی صرف نوشتن یک پروژه ساده کردن کم نیستن! همونایی که بدون تحقیق و بررسی درست صرفاً با محیط‌هایی که مخصوص اون کار</p>
        <div className="separator"></div>
        <div className="read-article">
            <a href="#" className='flex'>
                <i className='fa fa-arrow-up'></i>
            </a>
        </div>
    </div>
</div>

        );
    }
}

export default ArticleItem;
