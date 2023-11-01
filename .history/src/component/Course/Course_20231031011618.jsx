import React, { Component } from 'react';
import './Course.css'
class Course extends Component {
    render() {
       if(this.props.price !== 0){
        return (
            <div className='w-full text-right'>
                
<div class=" bg-white border border-gray-200 main-card shadow dark:bg-gray-800 dark:border-gray-700 w-full card">
    <a href="#">
        <img class="rounded-t-lg" src={this.props.image} alt="" />
    </a>
    <div class="p-5 h-full flex flex-col">
        <div className="categories flex justify-end">
        <div className="cat-2-product ">
                <p>{this.props.cat2}</p>
            </div>
            <div className="cat-1-product ms-1">
                <p>{this.props.cat1}</p>
            </div>
          
        </div>
        <a href="#">
            <h5 class="mb-2 text-2xl  tracking-tight title-product text-gray-900 dark:text-white">{this.props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.desc}</p>
        <div className="flex justify-between more-detail-product items-center">
            <div className="comment flex items-center text-right text-yellow-300">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span>{Number(5.0).toLocaleString('fa-ir')}</span>
            </div>
            <div className="teacher text-gray-500">
            <span className=' px-1 font-bold'>19:15</span>
            <i className="fa fa-clock-o"></i>
            <span className='px-2'>{this.props.teacher}</span>
            <i className="fa fa-user"></i>
            </div>
        </div>
        <dib className="separator"></dib>
        <div className="flex justify-between">
                <div className="price-product" lang='fa'>!رایگان</div>
                <div className="users-product flex items-center text-white">
                    <span className='px-2'>{Number(this.props.users).toLocaleString('fa-ir')}</span>
                    <i className="fa fa-user"></i>
                </div>
            </div>
    </div>
</div>

            </div>
            )
       }else{
        <div className='w-full text-right'>
                
        <div class=" bg-white border border-gray-200 main-card shadow dark:bg-gray-800 dark:border-gray-700 w-full card">
            <a href="#">
                <img class="rounded-t-lg" src={this.props.image} alt="" />
            </a>
            <div class="p-5 h-full flex flex-col">
                <div className="categories flex justify-end">
                <div className="cat-2-product ">
                        <p>{this.props.cat2}</p>
                    </div>
                    <div className="cat-1-product ms-1">
                        <p>{this.props.cat1}</p>
                    </div>
                  
                </div>
                <a href="#">
                    <h5 class="mb-2 text-2xl  tracking-tight title-product text-gray-900 dark:text-white">{this.props.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.desc}</p>
                <div className="flex justify-between more-detail-product items-center">
                    <div className="comment flex items-center text-right text-yellow-300">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <span>{Number(5.0).toLocaleString('fa-ir')}</span>
                    </div>
                    <div className="teacher text-gray-500">
                    <span className=' px-1 font-bold'>19:15</span>
                    <i className="fa fa-clock-o"></i>
                    <span className='px-2'>{this.props.teacher}</span>
                    <i className="fa fa-user"></i>
                    </div>
                </div>
                <dib className="separator"></dib>
                <div className="flex justify-between">
                        <div className="price-product" lang='fa'>{Number(this.props.price).toLocaleString('fa-ir')}</div>
                        <div className="users-product flex items-center text-white">
                            <span className='px-2'>{Number(this.props.users).toLocaleString('fa-ir')}</span>
                            <i className="fa fa-user"></i>
                        </div>
                    </div>
            </div>
        </div>
        
                    </div>
       }
        
    }
}

export default Course;
