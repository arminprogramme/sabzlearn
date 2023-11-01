import React, { Component } from 'react';
import Title from '../../Title/Title'
import MapList from './MapList.jsx';
import './Roadmap.css';
class Roadmap extends Component {

    constructor(props){
        super(props)

        this.state= {
            maps : [
                {id : 1 ,icon : 'fa fa-' , title : 'امنیت' , gradient : 'background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);', count : 15},
                {id : 2 ,icon : 'fa fa-' , title : 'پایتون' , gradient : '', count : 15},
                {id : 3 ,icon : 'fa fa-' , title : 'فرانت اند' , gradient : '', count : 15},
                {id : 4 ,icon : 'fa fa-' , title : 'مهارت های نرم' , gradient : '', count : 15},
            ]
        }
    }

    render() {
        return (
            <div className='py-5'>
                <Title titleSubject="نقشه راه ها" titleText="نقشه های راه برای شروع اصولی یادگیری" titleColor="#d946ef"/>
                
                
                <div className="maps-div">
                    <MapList />
                </div>
            </div>

        );
    }
}

export default Roadmap;