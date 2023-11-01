import React, { Component } from 'react';
import Title from '../../Title/Title'
import Course from '../../Course/Course'
class PopularCourse extends Component {
    constructor(props){
        super(props)

        this.state = {
            courses : [
                {id: 1 , image: 'images/product/Com_JAVASCRIPT-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 2 , image: 'images/product/Com_python-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 3 , image: 'images/product/CSS-852x479-1-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 4 , image: 'images/product/HTML-852x479-2-1-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 5 , image: 'images/product/Com_black_js-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 6 , image: 'images/product/webinar1-852-1-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 7 , image: 'images/product/csshtml-852-768x432.jpg' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
                {id: 8 , image: 'images/product/Com_black_js-768x432.png' , fake : 2000 , price : 0 , title : '', teacher : '' , cat1:'' , cat2:'',users : '' , time:''},
            ]
        }
    }
    render() {
        return (
            <div className='body-item'>
                  <Title titleSubject="محبوبترین دوره ها" titleText="پرمخاطب ترین و بهترین دوره های سبزلرن" titleColor="#2ed573"/>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {this.state.courses.map(item => {
                    return <Course key={item.id} {...item}/>
                })}
            </div>
            </div>
        );
    }
}

export default PopularCourse;
