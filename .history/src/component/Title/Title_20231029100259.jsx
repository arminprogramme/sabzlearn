import React, { Component } from 'react';
import './Title.css'
class Title extends Component {
    render() {
        return (
            <div className='text-right text-white title-courses'>
              <div className="big-title flex justify-end items-center">
             <div className="titles">
             <h2>آخرین دوره ها</h2>
          
             </div>
                <span></span>
              </div>
              <p>سکوی پرتاپ شما به سمت موفقیت</p>
            </div>
        );
    }
}

export default Title;
