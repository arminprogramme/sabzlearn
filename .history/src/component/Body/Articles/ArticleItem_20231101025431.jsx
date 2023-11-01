import React, { Component } from 'react';

class ArticleItem extends Component {
    render() {
        return (
            
<div class=" article-item  border border-gray-200 my-2 text-right rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg w-full" src="images/article/شاخص-نهایی-768x512.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.text}</p>
        
        <div className="article-detail justify-end py-2 items-center flex">
            <div className="det-article px-3 pt-2">
                <span className='font-bold'>1402/03/05</span>
                <i className='fa fa-calendar ps-1'></i>
            </div>
            <div className="det-article">
                <span>{this.props.author}</span>
                <i className='fa fa-user ps-1'></i>
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
