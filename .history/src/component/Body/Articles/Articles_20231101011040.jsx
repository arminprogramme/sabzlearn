import React, { Component } from 'react';
import Title from '../../Title/Title';
class Articles extends Component {
    render() {
        return (
            <div className='text-right'>
                <Title titleSubject="آخرین مقالات" titleText="مقالات بروز برنامه نویسی" titleColor="#F43F5E"/>
            </div>
        );
    }
}

export default Articles;
