import React, { Component } from 'react';

class ArticleItem extends Component {
    render() {
        return (
            
<div class=" article-item  border border-gray-200 text-right rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src="images/article/شاخص-نهایی-768x512.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">آموزش گام به گام ساخت ویروس با پایتون</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">زخم خورده‌هایی که به خاطر نداشتن محیط برنامه نویسی خوب، زمان زیادی صرف نوشتن یک پروژه ساده کردن کم نیستن! همونایی که بدون تحقیق و بررسی درست صرفاً با محیط‌هایی که مخصوص اون کار</p>
        
        <div className="article-detail justify-end flex">
            <div className="det-article px-2">
                <span></span>
                <i className='fa fa-calendar'></i>
            </div>
            <div className="det-article">
                <span>ارمیا مزرعه</span>
                <i className='fa fa-calendar ps-1'></i>
            </div>
        </div>
        <div className="separator"></div>
        <div className="read-article text-center">
            <a href="#" className='flex justify-center items-center py-2 '>
                <i className='fa fa-arrow-left px-3 '></i>
                <span>مشاهده مقاله</span>
            </a>
        </div>
    </div>
</div>

        );
    }
}

export default ArticleItem;
