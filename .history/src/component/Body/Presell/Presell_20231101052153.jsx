import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course';
class Presell extends Component {

    constructor(props){
        super(props)

        this.state={
            courses : [
                {id : 1 , image : '' , title : '' , desc : '' , teacher : '' , cat1 : '' , cat2 : '' , time : '' , price : 5 , users : 55 },
                {id : 1 , image : '' , title : '' , desc : '' , teacher : '' , cat1 : '' , cat2 : '' , time : '' , price : 5 , users : 55 },
                {id : 1 , image : '' , title : '' , desc : '' , teacher : '' , cat1 : '' , cat2 : '' , time : '' , price : 5 , users : 55 },
                {id : 1 , image : '' , title : '' , desc : '' , teacher : '' , cat1 : '' , cat2 : '' , time : '' , price : 5 , users : 55 },
            ]
        }
    }


    render() {
        return (
            <div className='my-9 py-9'>
                <Title titleSubject="دوره های پیش فروش" titleText="دوره هایی که قراره برگزار بشن" titleColor="#2ED573"/>
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    <Course />
                </div>
            </div>
        );
    }
}

export default Presell;
