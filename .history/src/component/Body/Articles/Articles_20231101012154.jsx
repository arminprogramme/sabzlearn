import React, { Component } from 'react';
import ArticleItem from './ArticleItem.jsx';
import Title from '../../Title/Title';
import './Article.css'
class Articles extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            articles : [
                {id : 1 , image : '' , title : '' , desc : '' , author : '' , date : '' },
                {id : 1 , image : '' , title : '' , desc : '' , author : '' , date : '' },
                {id : 1 , image : '' , title : '' , desc : '' , author : '' , date : '' },
                {id : 1 , image : '' , title : '' , desc : '' , author : '' , date : '' },
            ]
        }
    }

    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>

               <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {this.state.articles.map(item => {
                    return <ArticleItem key={item.id} {...item}/>
                })}
               </div>
            </div>
        );
    }
}

export default Articles;
