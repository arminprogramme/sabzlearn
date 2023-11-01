import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div className='text-right py-10'>
                
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="images/product/sabz-next-768x432.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next.js دوره متخصص </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های…</p>
        <div className="flex justify-between more-detail-product">
            <div className="comment flex">
            <i className="fa fa-user"></i>
            <span>محمد امین سعیدی راد</span>
            </div>
            <div className="teacher"></div>
        </div>
    </div>
</div>

            </div>
        );
    }
}

export default Course;
