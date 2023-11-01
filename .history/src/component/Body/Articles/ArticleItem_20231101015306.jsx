import React, { Component } from 'react';

class ArticleItem extends Component {
    render() {
        return (
            
<div class=" article-item  text-right rounded-lg shadow ">
    <div className='banner-img-article' style={{backgroundImage : this.props.image}}>
     
    </div>
    <div class="p-5 article-content">
        <a >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">آموزش گام به گام ساخت ویروس با پایتون</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">زخم خورده‌هایی که به خاطر نداشتن محیط برنامه نویسی خوب، زمان زیادی صرف نوشتن یک پروژه ساده کردن کم نیستن! همونایی که بدون تحقیق و بررسی درست صرفاً با محیط‌هایی که مخصوص اون کار</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        );
    }
}

export default ArticleItem;
