import React, { Component } from 'react';
import ArticleItem from './ArticleItem.jsx';
import Title from '../../Title/Title';
import './Article.css'
class Articles extends Component {
    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>

                <ArticleItem/>
            </div>
        );
    }
}

export default Articles;
