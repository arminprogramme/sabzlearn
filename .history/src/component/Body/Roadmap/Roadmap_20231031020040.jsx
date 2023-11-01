import React, { Component } from 'react';
import Title from '../../Title/Title'
import MapList from './MapList.jsx';
import './Roadmap.css';
class Roadmap extends Component {

    constructor(props){
        super(props)

        this.state= {
            roadMaps : [
                {id : 1 ,icon : 'fa fa-' , title : 'امنیت' , gradient : 'background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);', count : 8},
                {id : 2 ,icon : 'fa fa-' , title : 'پایتون' , gradient : 'background-image: linear-gradient(to right top, #003687, #0066b5, #0095cb, #00c1cb, #12ebbd);', count : 15},
                {id : 3 ,icon : 'fa fa-' , title : 'فرانت اند' , gradient : 'background-image: linear-gradient(to right top, #c20000, #d34c00, #df7900, #e7a100, #ebc912);', count : 25},
                {id : 4 ,icon : 'fa fa-' , title : 'مهارت های نرم' , gradient : 'background-image: linear-gradient(to right top, #e479f9, #d361dd, #c248c1, #b02da5, #9e008b);', count : 7},
            ]
        }
    }

    render() {
        return (
            <div className='py-5'>
                <Title titleSubject="نقشه راه ها" titleText="نقشه های راه برای شروع اصولی یادگیری" titleColor="#d946ef"/>
                
                
                <div className="maps-div">
                   <div className="grid md:grid-cols-2 lg:grid-cols-4">
                    {this.state.roadMaps.map(item => {
                        return <MapList key={item.id}/>
                    })}
                   </div>
                </div>
            </div>

        );
    }
}

export default Roadmap;