import React, { Component } from 'react';
import Title from '../../Title/Title'
class Roadmap extends Component {

    constructor(props){
        super(props)

        this.state= {
            maps : [
                {},
                {},
                {},
                {},
            ]
        }
    }

    render() {
        return (
            <div className='py-5'>
                <Title titleSubject="نقشه راه ها" titleText="نقشه های راه برای شروع اصولی یادگیری" titleColor="#d946ef"/>
            </div>
        );
    }
}

export default Roadmap;