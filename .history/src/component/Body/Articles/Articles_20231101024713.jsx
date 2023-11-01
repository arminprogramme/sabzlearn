import React, { Component } from 'react';
import ArticleItem from './ArticleItem.jsx';
import Title from '../../Title/Title';
import './Article.css'
class Articles extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            articles : [
                {id : 1 , image : 'images/article/' , title : 'محیط های برنامه نویسی پایتون + راهنمایی انتخاب' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
                {id : 1 , image : 'images/article/' , title : 'رسم نمودار در پایتون – آموزش عملی' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
                {id : 1 , image : 'images/article/' , title : '' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
                {id : 1 , image : 'images/article/' , title : '' , desc : '' , author : 'ارمیا مزرعه' , date : '' },
            ]
        }
    }

    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>

               <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {this.state.articles.map(item => {
                    return <ArticleItem/>
                })}
               </div>
            </div>
        );
    }
}

export default Articles;
