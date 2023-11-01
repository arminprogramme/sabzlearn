import React, { Component } from 'react';
import Title from '../../Title/Title'
class Presell extends Component {
    render() {
        return (
            <div className='my-9 py-9'>
                <Title titleSubject="دوره های پیش فروش" titleText="دوره هایی که قراره برگزار بشن" titleColor="#2ED573"/>
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4"></div>
            </div>
        );
    }
}

export default Presell;
