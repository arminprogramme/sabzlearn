import React, { Component } from 'react';
import ArticleItem from './ArticleItem.jsx';
import Title from '../../Title/Title';
import './Article.css'
class Articles extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            articles : [
                {id : 1 , image : 'linear-gradient(to top, #28293d, #59586900, #8d8c9800, #c5c4ca5f, #ffffff42), url(../../../../public/images/article/android-on-javascript-768x432);' , title : '' , desc : '' , author : '' , date : '' },
                {id : 1 , image : 'linear-gradient(to top, #28293d, #59586900, #8d8c9800, #c5c4ca5f, #ffffff42), url(../../../../public/images/article/تصویر-شاخص-768x512.jpg);' , title : '' , desc : '' , author : '' , date : '' },
                {id : 1 , image : 'linear-gradient(to top, #28293d, #59586900, #8d8c9800, #c5c4ca5f, #ffffff42), url(../../../../public/images/article/شاخص-فاینال-768x512.jpg);' , title : '' , desc : '' , author : '' , date : '' },
                {id : 1 , image : 'linear-gradient(to top, #28293d, #59586900, #8d8c9800, #c5c4ca5f, #ffffff42), url(../../../../public/images/article/شاخص-فاینال-768x512.jpg);' , title : '' , desc : '' , author : '' , date : '' },
            ]
        }
    }

    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>

               <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {this.state.articles.map(item => {
                    return <ArticleItem key={item.id} {...item}/>
                })}
               </div>
            </div>
        );
    }
}

export default Articles;
