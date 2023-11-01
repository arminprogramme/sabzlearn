import React, { Component } from 'react';
import HelpItem from './HelpItem.jsx';
import Title from '../../Title/Title'
import './Help.css'
class Help extends Component {

    constructor(props){
        super(props)

        this.state={
            help : [
                {id : 1 , title : 'دوره های اختصاصی' , text : '' , rotate : '' , background : ''},
                {id : 1 , title : 'اجازه تدریس' , text : '' , rotate : '' , background : ''},
                {id : 1 , title : 'دوره های پولی و رایگان' , text : '' , rotate : '' , background : ''},
                {id : 1 , title : 'اولویت بندی به ترتیب منافع' , text : '' , rotate : '' , background : ''},
            ]
        }
    }

    render() {
        return (
            <div className='body-item'>
                <Title titleSubject="ما چه کمکی میتوانیم بهتون بکنیم" titleText="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی
						خصوصی هست" titleColor="#4E81FB"/>


                 <div className='grid lg:grid-cols-2 text-right'>
                    {this.state.help.map(item => {
                        return <HelpItem/>
                    })}
                    </div>           
            </div>
        );
    }
}

export default Help;
