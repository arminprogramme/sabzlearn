import React, { Component } from 'react';
import './Title.css'
class Title extends Component {
    render() {
        return (
            <div className='text-right text-white title-courses pb-5'>
              <div className="big-title flex justify-end items-center">
             <div className="titles">
             <h2>{this.props.titleSubject}</h2>
          
             </div>
                <span style={{backgroundColor: 'red'}}></span>
              </div>
              <p>{this.props.titleText}</p>
            </div>
        );
    }
}

export default Title;
