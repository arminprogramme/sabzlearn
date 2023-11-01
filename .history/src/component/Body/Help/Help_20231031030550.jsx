import React, { Component } from 'react';
import HelpItem from './HelpItem.jsx';
import Title from '../../Title/Title'
class Help extends Component {
    render() {
        return (
            <div className='body-item'>
                <Title titleSubject="ما چه کمکی میتوانیم بهتون بکنیم" titleText="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی
						خصوصی هست" titleColor="#4E81FB"/>


                 <div className='grid lg:grid-cols-2'>
                    <HelpItem/>
                    </div>           
            </div>
        );
    }
}

export default Help;
